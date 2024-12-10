<script lang="ts">
    import { SvelteGantt, SvelteGanttTable, MomentSvelteGanttDateAdapter } from 'svelte-gantt';
    import { onMount } from 'svelte';
    import TaskPopover from '../../components/TaskPopover.svelte';
    import { date } from '../../utils'
    import { db } from '../../lib/firebase.client';
    import { ref, set, onValue} from "firebase/database";
    import { rents, type Rent } from '$lib/rents';
    import { seats, type Seat } from '$lib/seats';
    import moment from 'moment';
    import Modal from '../../components/Modal.svelte';
    import FormRent from '../../components/FormRent.svelte'
    import Swal from 'sweetalert2'
    import Flatpickr from 'svelte-flatpickr';
    import 'flatpickr/dist/flatpickr.css';
    import { German } from "flatpickr/dist/l10n/de.js"
    import flatpickr from "flatpickr";

    const myFlatpickr = flatpickr.localize(German);

    let rows: any[] = [];
    let tasks: any[] = [];

    let taskPopoverCoordinates = { x: 0, y: 0 };
    let isTaskPopoverVisible = false;
    let selectedTask: any = null;

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

    const optionsFlatpickr = {
        mode: "range",
        minDate: "today",
        altInput: true,
        altFormat: "d.m.Y",
        dateFormat: "Y-m-d",
        enableTime: false,
        weekNumbers: true
    };

    function getDatabaseRentData() {
        const rentRef = ref(db, 'rent-baby-seat');
        onValue(rentRef, (snapshot) => {
            const rentData = snapshot.val();
            $rents = Object.values(rentData);
            $rents = $rents.map(rent => { rent.seatName = rent.part.name; return rent});
            $seats.sort(sortSeatsByName)
            $seats.forEach(seat => {
                rows.push({ id: seat.index, label: seat.name });
            });
            $rents.forEach(rent => {
                tasks.push({
                    id: rent.index,
                    label: rent.name,
                    resourceId: rent.part.index,
                    from: date(rent.startDate),
                    to: date(rent.endDate).add(1, 'days'),
                    enableDragging: false,
                    enableResize: false,
                    classes: 'pink'
                })
            });

            window.gantt = gantt = new SvelteGantt({ target: document.getElementById('example-gantt-events'), props: options });

            // gantt.api.tasks.on.move((task) => console.log('Listener: task move', task));
            //gantt.api.tasks.on.switchRow((task, row, previousRow) => console.log('Listener: task switched row', task));
            gantt.api.tasks.on.select((task: any) => handleEditItem(task));
            //gantt.api.tasks.on.moveEnd((task) => console.log('Listener: task move end', task));
            // gantt.api.tasks.on.change(([data]) => console.log('Listener: task change', data));
            // gantt.api.tasks.on.changed((task) => console.log('Listener: task changed', task));
            // gantt.api.tasks.on.dblclicked((task) => console.log('Listener: task double clicked', task));
        });
    }

    function getSeatsData() {
        const starCountRef = ref(db, 'baby-seat');
        onValue(starCountRef, (snapshot) => {
            const seatData = snapshot.val();
            $seats = Object.values(seatData);
        });
        
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

    let fromDate = moment().format('YYYY-MM-DD');
    let toDate = moment().add(28, 'days').format('YYYY-MM-DD');

    let currentStart = date(fromDate);
    let currentEnd = date(toDate);

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
        to: currentEnd.add(1, 'days'),
        tableHeaders: [{ title: 'Seats', property: 'label', width: 140}],
        tableWidth: 250,
        ganttTableModules: [SvelteGanttTable],
        taskElementHook: (node: any, task: any) => {
            function onHover(event: any) {
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

    let gantt: any;
    onMount(() => {
        getSeatsData();
        setTimeout(() => {
            getDatabaseRentData();
        }, 100)
    });

    function setCalendarDate(event: any) {
        const [ selectedDates, dateStr ] = event.detail;
        options.from = date(selectedDates[0]);
        options.to = date(selectedDates[1]).add(1, 'days');
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

    function handleEditItem(task: any) {
        const myRent = $rents.find((rent) => rent.index === task[0].model.id) ?? pickedRent;
        pickedRent = myRent;
        modalTitle = 'Miete bearbeiten'
        showModal = true;
    }

    let timeRange = [fromDate, toDate];

</script>

<Modal bind:showModal>
	<h2 slot="header">
		{modalTitle}
	</h2>

	<FormRent on:saveRent={handleSaveItem} rentObject={pickedRent} />
</Modal>
<div class="container pl-4">
    <div class="flex flex-col gap-4 mt-8">
        <div class="flex gap-2 items-center">
            <label for="time-range">Zeitraum: </label>
            <Flatpickr flatpickr={myFlatpickr} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 w-52 h-12 cursor-pointer" options={optionsFlatpickr} bind:value={timeRange} on:close={setCalendarDate} name="date" />
            <!-- <div>
                <label for="from" class="block mb-2 text-sm font-medium text-gray-900">Von</label>
                <input type="date" id="from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Von" bind:value={fromDate} on:change={setCalendarDate} />
            </div>
            <div>
                <label for="to" class="block mb-2 text-sm font-medium text-gray-900">Bis</label>
                <input type="date" id="to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bis" bind:value={toDate} on:change={setCalendarDate}/>
            </div>
        -->
        </div>
        <hr />
        <div id="example-gantt-events"></div>
    </div>
    <TaskPopover task={selectedTask} coordinates={taskPopoverCoordinates} isVisible={isTaskPopoverVisible} />
</div>

<style>
    .container {
        display: flex;
        overflow: auto;
        flex: 1;
    }
</style>