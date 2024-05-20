<script lang="ts">
    import { SvelteGantt, SvelteGanttDependencies, SvelteGanttTable, MomentSvelteGanttDateAdapter } from 'svelte-gantt';
    import { onMount } from 'svelte';
    import TaskPopover from '../../components/TaskPopover.svelte';
    import { time, date } from '../../utils'
    import { db } from '../../lib/firebase.client';
    import { ref, set, onValue} from "firebase/database";
    import { rents, type Rent } from '$lib/rents';
    import type { Seat } from '$lib/seats';
    import moment from 'moment';
    import Modal from '../../components/Modal.svelte';
    import FormRent from '../../components/FormRent.svelte'
    import Swal from 'sweetalert2'

    let rows = [];
    let tasks = [];

    let taskPopoverCoordinates = { x: 0, y: 0 };
    let isTaskPopoverVisible = false;
    let selectedTask = null;

    let showModal = false;
    let modalTitle = '';

    let pickedRent: Rent = {
        created: '',
        email: '',
        endDate: '',
        index: '',
        name: '',
        note: '',
        phone: '',
        shipping: false,
        startDate: '',
        updated: '',
        seatName: '',
        part: {
            color: '',
            created: '',
            index: '',
            name: '',
            note: '',
            productionDate: '',
            rentstart: '',
            serialNumber: '',
            type: '',
            updated: '',
        }
    }

    function getDatabaseRentData() {
        const rentRef = ref(db, 'rent-baby-seat');
        onValue(rentRef, (snapshot) => {
            const rentData = snapshot.val();
            $rents = Object.values(rentData);
            $rents = $rents.map(rent => { rent.seatName = rent.part.name; return rent});
            const distinctSeats = distinctPartsByPartIndex($rents);
            distinctSeats.forEach(seat => {
                rows.push({ id: seat.index, label: seat.name });
            });
            $rents.forEach(rent => {
                tasks.push({
                    id: rent.index,
                    label: rent.name,
                    resourceId: rent.part.index,
                    from: date(rent.startDate),
                    to: date(rent.endDate),
                    enableDragging: false,
                    enableResize: false,
                    classes: 'orange'
                })
            });

            window.gantt = gantt = new SvelteGantt({ target: document.getElementById('example-gantt-events'), props: options });

            // gantt.api.tasks.on.move((task) => console.log('Listener: task move', task));
            //gantt.api.tasks.on.switchRow((task, row, previousRow) => console.log('Listener: task switched row', task));
            gantt.api.tasks.on.select((task) => handleEditItem(task));
            //gantt.api.tasks.on.moveEnd((task) => console.log('Listener: task move end', task));
            // gantt.api.tasks.on.change(([data]) => console.log('Listener: task change', data));
            // gantt.api.tasks.on.changed((task) => console.log('Listener: task changed', task));
            // gantt.api.tasks.on.dblclicked((task) => console.log('Listener: task double clicked', task));
        });
    }

    function distinctPartsByPartIndex(rents: Rent[]): Seat[] {
        const distinctParts: Seat[] = [];
        const seenIds = new Set<string>();

        rents.forEach(rent => {
            if (!seenIds.has(rent.part.index)) {
                seenIds.add(rent.part.index);
                distinctParts.push(rent.part);
            }
        });

        distinctParts.sort(sortSeatsByName);

        return distinctParts;
    }

    function sortSeatsByName( a: Seat, b: Seat ) {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }

    let fromDate = '2024-06-01';
    let toDate = '2024-07-01';

    let currentStart = date(fromDate);
    let currentEnd = date(toDate);

    /*
    export const data = {
        rows: [{
            id: 1,
            label: "Accounting",
        }, {
            id: 2,
            label: "Business Development",
        }, {
            id: 3,
            label: "Ida Flewan"
        }, {
            id: 4,
            label: "Lauréna Shrigley"
        }, {
            id: 5,
            label: "Ange Kembry"
        }],
        tasks: [{
            id: 3,
            resourceId: 1,
            label: "PET-CT",
            from: date('2024-05-15'),
            to: date('2024-05-20'),
            classes: "orange"
        }, {
            id: 4,
            resourceId: 1,
            label: "Auditing",
            from: date('2024-05-16'),
            to: date('2024-05-19'),
            classes: "orange"
        }, {
            id: 5,
            resourceId: 2,
            label: "Security Clearance",
            from: time("15:15"),
            to: time("16:00"),
            classes: "green"
        }, {
            id: 6,
            resourceId: 2,
            label: "Policy Analysis",
            from: time("14:00"),
            to: time("17:00"),
            classes: "blue"
        }, {
            id: 7,
            resourceId: 2,
            label: "Xbox 360",
            from: time("13:00"),
            to: time("14:00"),
            classes: "blue"
        }, {
            id: 8,
            resourceId: 3,
            label: "GNU/Linux",
            from: time("14:00"),
            to: time("15:30"),
            classes: "blue"
        }, {
            id: 9,
            resourceId: 4,
            label: "Electronic Trading",
            from: time("15:00"),
            to: time("17:00"),
            classes: "green"
        }, {
            id: 10,
            resourceId: 5,
            label: "Alternative Medicine",
            from: time("14:30"),
            to: time("15:30"),
            classes: "orange"
        }],
        dependencies: []
    }
    */

    let data = {
        rows: rows,
        tasks: tasks,
        dependencies: []
    }

    let options = {
        dateAdapter: new MomentSvelteGanttDateAdapter(moment),
        rows: data.rows,
        tasks: data.tasks,
        dependencies: data.dependencies,
        timeRanges: [],
        columnOffset: 15,
        magnetOffset: 15,
        rowHeight: 52,
        rowPadding: 6,
        headers: [{ unit: 'day', format: 'dd DD.MM' }],
        fitWidth: false,
        minWidth: 2000, // calculate minWidth by 90px x days
        from: currentStart,
        to: currentEnd,
        tableHeaders: [{ title: 'Seats', property: 'label', width: 140}],
        tableWidth: 250,
        ganttTableModules: [SvelteGanttTable],
        ganttBodyModules: [SvelteGanttDependencies],
        taskElementHook: (node, task) => {
            let popup;
            function onHover(event) {
                taskPopoverCoordinates = { x: event.clientX + 5, y: event.clientY +5 };
                selectedTask = task;
                isTaskPopoverVisible = true;
            }

            function onLeave() {
                isTaskPopoverVisible = false;
            }

            node.addEventListener('mouseenter', onHover);
            node.addEventListener('mouseleave', onLeave);

            return {
                destroy() {
                    node.removeEventListener('mouseenter', onHover);
                    node.removeEventListener('mouseleave', onLeave);
                }
            }
        },
        // taskContent: (task) => `${task.label} ${task.from.format('HH:mm')}`
    }

    let gantt;
    onMount(() => {
        getDatabaseRentData();
    });

    function setCalendarDate() {
        options.from = date(fromDate);
        options.to = date(toDate);
        const daysBetweeen = moment(options.to).diff(moment(options.from), 'days');
        options.minWidth = (daysBetweeen * 90);
        gantt.$set(options);
    }

    function handleSaveItem(event: any) {
        showModal = false;
        event.detail.item.updated = moment().format('DD.MM.YYYY HH:mm:ss')
        set(ref(db, `rent-baby-seat/${event.detail.item.index}`), event.detail.item)
        .then(() => {
            Swal.fire({
                title: 'Miete gespeichert',
                text: `Miete wurde geändert`,
                icon: 'success',
                allowOutsideClick: false,
                showConfirmButton: false,
                timer: 2000,
            })
            setInterval(() => {
                location.reload()
            }, 2000)
        })
        .catch((error) => {
        Swal.fire({
            title: 'Miete wurde nicht gespeichert',
            text: ``,
            icon: 'error',
            allowOutsideClick: false,
            showConfirmButton: false,
            timer: 2000,
        })
        console.log('Save error: ' + error)
        });
    }

    function handleEditItem(task) {
        const myRent = $rents.find((rent) => rent.index === task[0].model.id);
        pickedRent = myRent;
        modalTitle = 'Miete bearbeiten'
        showModal = true;
    }

</script>

<Modal bind:showModal>
	<h2 slot="header">
		{modalTitle}
	</h2>

	<FormRent on:saveRent={handleSaveItem} rentObject={pickedRent} />
</Modal>
<div class="container">
    <div class="flex flex-col gap-4 mt-8">
        <div class="flex gap-4">
            <div>
                <label for="from" class="block mb-2 text-sm font-medium text-gray-900">Von</label>
                <input type="date" id="from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Von" bind:value={fromDate} on:change={setCalendarDate} />
            </div>
            <div>
                <label for="to" class="block mb-2 text-sm font-medium text-gray-900">Von</label>
                <input type="date" id="to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bis" bind:value={toDate} on:change={setCalendarDate}/>
            </div>
        </div>
        <hr />
        <div id="example-gantt-events"></div>
    </div>
    <TaskPopover task={selectedTask} coordinates={taskPopoverCoordinates} isVisible={isTaskPopoverVisible} />
</div>

<style>
    #example-gantt-events {
        flex-grow: 1;
        overflow: auto;
        max-height: 80vh;
    }

    .container {
        display: flex;
        overflow: auto;
        flex: 1;
    }

    #example-gantt-events :global(.sg-hover) {
        background-color: #00000008;
    }

    #example-gantt-events :global(.sg-hover .sg-table-body-cell) {
        background-color: #00000008;
    }
</style>