import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component, b as add_attribute } from "../../../chunks/ssr.js";
import moment from "moment";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import { r as rents, F as FormRent } from "../../../chunks/FormRent.js";
import { M as Modal } from "../../../chunks/seats.js";
import "sweetalert2";
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function styleInject(css2, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css_248z$e = ".sg-label-bottom.svelte-13pjhle.svelte-13pjhle{position:absolute;top:calc(100% + 10px);color:#888}.debug.svelte-13pjhle.svelte-13pjhle{position:absolute;top:-10px;right:0;font-size:8px;color:black}.sg-task.svelte-13pjhle.svelte-13pjhle{position:absolute;border-radius:2px;white-space:nowrap;transition:background-color 0.2s,\n            opacity 0.2s;pointer-events:all;touch-action:none}.sg-task-background.svelte-13pjhle.svelte-13pjhle{position:absolute;height:100%;top:0}.sg-task-content.svelte-13pjhle.svelte-13pjhle{position:absolute;height:100%;top:0;padding-left:14px;font-size:14px;display:flex;align-items:center;justify-content:flex-start;user-select:none}.sg-task.animating.svelte-13pjhle.svelte-13pjhle:not(.moving){transition:left 0.2s,\n            top 0.2s,\n            transform 0.2s,\n            background-color 0.2s,\n            width 0.2s,\n            height 0.2s}.sg-task--sticky.svelte-13pjhle.svelte-13pjhle:not(.moving){transition:left 0.2s,\n            top 0.2s,\n            transform 0.2s,\n            background-color 0.2s,\n            width 0.2s,\n            height 0.2s}.sg-task--sticky.svelte-13pjhle>.sg-task-content.svelte-13pjhle{position:sticky;left:0;max-width:100px}.sg-task.moving.svelte-13pjhle.svelte-13pjhle{z-index:10000;opacity:0.5}.sg-task.resize-enabled.svelte-13pjhle.svelte-13pjhle:hover::before{content:'';width:4px;height:50%;top:25%;position:absolute;border-style:solid;border-color:rgba(255, 255, 255, 0.5);cursor:ew-resize;margin-left:3px;left:0;border-width:0 1px;z-index:1}.sg-task.resize-enabled.svelte-13pjhle.svelte-13pjhle:hover::after{content:'';width:4px;height:50%;top:25%;position:absolute;border-style:solid;border-color:rgba(255, 255, 255, 0.5);cursor:ew-resize;margin-right:3px;right:0;border-width:0 1px;z-index:1}.sg-task-reflected.svelte-13pjhle.svelte-13pjhle{opacity:0.5}.sg-task-instant.svelte-13pjhle.svelte-13pjhle{width:2px !important;margin-left:-1px}.sg-task-background.svelte-13pjhle.svelte-13pjhle{background:rgba(0, 0, 0, 0.2)}.sg-task{color:white;background:rgb(116, 191, 255)}.sg-task:hover{background:rgb(98, 161, 216)}.sg-task.selected{background:rgb(69, 112, 150)}.sg-milestone.svelte-13pjhle.svelte-13pjhle{width:20px !important;min-width:40px;margin-left:-20px}.sg-task.sg-milestone.svelte-13pjhle.svelte-13pjhle{background:transparent}.sg-milestone.svelte-13pjhle .sg-milestone__diamond.svelte-13pjhle{position:relative}.sg-milestone.svelte-13pjhle .sg-milestone__diamond.svelte-13pjhle:before{position:absolute;top:0;left:50%;content:' ';height:28px;width:28px;transform-origin:0 0;transform:rotate(45deg)}.sg-milestone__diamond:before{background:rgb(116, 191, 255)}";
styleInject(css_248z$e);
var css_248z$d = ".sg-row.svelte-7u5y5s{position:relative;width:100%;box-sizing:border-box}";
styleInject(css_248z$d);
var css_248z$c = ".sg-time-range.svelte-w7p5la{height:100%;position:absolute;display:flex;flex-direction:column;align-items:center;background-image:linear-gradient(\n            -45deg,\n            rgba(0, 0, 0, 0) 46%,\n            #e03218 49%,\n            #e03218 51%,\n            rgba(0, 0, 0, 0) 55%\n        );background-size:6px 6px !important;color:red;font-weight:400}.sg-time-range-label.svelte-w7p5la{margin-top:10px;background:#fff;white-space:nowrap;padding:4px;font-weight:400;font-size:10px}";
styleInject(css_248z$c);
var css_248z$b = ".sg-time-range-control.svelte-w4nglp{position:absolute}.sg-time-range-handle-left.svelte-w4nglp{position:absolute;left:0}.sg-time-range-handle-right.svelte-w4nglp{position:absolute;right:0}.sg-time-range-disabled.svelte-w4nglp{display:none}.sg-time-range-handle-left.svelte-w4nglp::before,.sg-time-range-handle-right.svelte-w4nglp::before{position:absolute;content:'';bottom:4px;border-radius:6px 6px 6px 0;border:2px solid #b0b0b7;width:9px;height:9px;transform:translateX(-50%) rotate(-45deg);background-color:#fff;border-color:#e03218;cursor:ew-resize}";
styleInject(css_248z$b);
var css_248z$a = ".column.svelte-4fffin{position:absolute;height:100%;box-sizing:border-box}.column.svelte-4fffin{border-right:#efefef 1px solid}";
styleInject(css_248z$a);
var css_248z$9 = ".column-header-row.svelte-vfarxf.svelte-vfarxf{position:relative;white-space:nowrap;height:32px}.column-header-cell.svelte-vfarxf.svelte-vfarxf{position:absolute;height:100%;box-sizing:border-box;text-overflow:clip;text-align:center;display:inline-flex;justify-content:center;align-items:center;font-size:1em;font-size:14px;font-weight:300;transition:background 0.2s;cursor:pointer;user-select:none;border-right:#efefef 1px solid;border-bottom:#efefef 1px solid}.column-header-cell.svelte-vfarxf.svelte-vfarxf:hover{background:#f9f9f9}.column-header-cell.sticky.svelte-vfarxf>.column-header-cell-label.svelte-vfarxf{position:sticky;left:1rem}";
styleInject(css_248z$9);
var css_248z$8 = ".sg-columns.svelte-1uqfnup{position:absolute;height:100%;width:100%}.sg-columns--background.svelte-1uqfnup{overflow:hidden;background-repeat:repeat;background-position-x:-1px}.sg-column.svelte-1uqfnup{position:absolute;height:100%;width:100%;box-sizing:border-box}";
styleInject(css_248z$8);
var css_248z$7 = ".sg-context-menu.svelte-1a9x2in{position:absolute;background:white;border:1px solid #ccc;padding:0.25em 0;font-size:10px;transition:opacity 0.4s ease 0s;opacity:1;box-shadow:rgba(0, 0, 0, 0.32) 1px 1px 3px 0px}.context-option.svelte-1a9x2in:hover{background:#eee}.context-option.svelte-1a9x2in{cursor:default;padding:0.2em 1em}";
styleInject(css_248z$7);
var css_248z$6 = ".sg-resize.svelte-1vzamdy{z-index:2;background:#e9eaeb;width:5px;cursor:col-resize;position:absolute;height:100%;transition:width 0.2s,\n            transform 0.2s}.sg-resize.svelte-1vzamdy:hover{transform:translateX(-2px);width:10px}";
styleInject(css_248z$6);
var css_248z$5 = ".sg-disable-transition.svelte-rujbxv .sg-task,.sg-disable-transition.svelte-rujbxv .sg-milestone{transition:transform 0s,\n            background-color 0.2s,\n            width 0s !important}.sg-view:not(:first-child){margin-left:5px}.right-scrollbar-visible{padding-right:17px}.sg-timeline.svelte-rujbxv{flex:1 1 0%;display:flex;flex-direction:column;overflow-x:auto}.sg-gantt.svelte-rujbxv{display:flex;width:100%;height:100%;position:relative}.sg-foreground.svelte-rujbxv{box-sizing:border-box;overflow:hidden;top:0;left:0;position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.sg-rows.svelte-rujbxv{width:100%;box-sizing:border-box;overflow:hidden}.sg-timeline-body.svelte-rujbxv{overflow:auto;flex:1 1 auto}.sg-header-scroller.svelte-rujbxv{border-right:1px solid #efefef;overflow:hidden;position:relative}.content.svelte-rujbxv{position:relative}*{box-sizing:border-box}";
styleInject(css_248z$5);
var css_248z$4 = ".sg-tree-expander.svelte-1tk4vqn{cursor:pointer;min-width:1.4em;display:flex;justify-content:center;align-items:center}.sg-cell-inner.svelte-1tk4vqn{display:flex}";
styleInject(css_248z$4);
var css_248z$3 = ".sg-table-row.svelte-oze9vk{display:inline-flex;min-width:100%;align-items:stretch;position:relative;font-weight:400;font-size:14px}.sg-table-cell.svelte-oze9vk{border-left:1px solid #eee}.sg-table-body-cell.svelte-oze9vk{border-bottom:#efefef 1px solid;background-color:#fff;font-weight:bold}.sg-resource-image.svelte-oze9vk{width:2.4em;height:2.4em;border-radius:50%;margin-right:0.6em;background:#047c69}.sg-resource-info.svelte-oze9vk{flex:1;height:100%;display:flex;flex-direction:row;align-items:center}.sg-table-icon.svelte-oze9vk{margin-right:0.5em}";
styleInject(css_248z$3);
var css_248z$2 = ".bottom-scrollbar-visible.svelte-afbyi7{padding-bottom:17px}.sg-table.svelte-afbyi7{overflow-x:auto;display:flex;flex-direction:column}.sg-table-scroller.svelte-afbyi7{width:100%;border-bottom:1px solid #efefef;overflow-y:hidden}.sg-table-header.svelte-afbyi7{display:flex;align-items:stretch;overflow:hidden;border-bottom:#efefef 1px solid;background-color:#fbfbfb}.sg-table-body.svelte-afbyi7{display:flex;flex:1 1 0;width:100%;overflow-y:hidden}.sg-table-header-cell.svelte-afbyi7{font-size:14px;font-weight:400}.sg-table-cell{white-space:nowrap;overflow:hidden;display:flex;align-items:center;flex-shrink:0;padding:0 0.5em;height:100%}.sg-table-cell:last-child{flex-grow:1}";
styleInject(css_248z$2);
var css_248z$1 = ".sg-dependency.svelte-12syssu{position:absolute;width:100%;height:100%}.arrow.svelte-12syssu{position:absolute;left:0px;pointer-events:none}.select-area.svelte-12syssu{pointer-events:visible;position:absolute}";
styleInject(css_248z$1);
var css_248z = ".dependency-container.svelte-epxabx{position:absolute;width:100%;height:100%;pointer-events:none;top:0;float:left;overflow:hidden;z-index:0}";
styleInject(css_248z);
const TaskPopover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { task } = $$props;
  let { coordinates } = $$props;
  let { isVisible } = $$props;
  if ($$props.task === void 0 && $$bindings.task && task !== void 0)
    $$bindings.task(task);
  if ($$props.coordinates === void 0 && $$bindings.coordinates && coordinates !== void 0)
    $$bindings.coordinates(coordinates);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  return `${isVisible ? `<div class="bg-white p-2 rounded z-50" style="${"position:absolute; top:" + escape(coordinates.y, true) + "px; left:" + escape(coordinates.x, true) + "px;"}"><div class="sg-popup-title">${escape(task.label)}</div> <div class="sg-popup-item"><div class="sg-popup-item-label" data-svelte-h="svelte-wknwr4">Von:</div> <div class="sg-popup-item-value">${escape(task.from.format("dddd DD.MM.YYYY"))}</div></div> <div class="sg-popup-item"><div class="sg-popup-item-label" data-svelte-h="svelte-1usqj51">Bis:</div> <div class="sg-popup-item-value">${escape(task.to.format("dddd DD.MM.YYYY"))}</div></div></div>` : ``}`;
});
function date(input) {
  return moment(input, "YYYY-MM-DD");
}
const css = {
  code: "#example-gantt-events.svelte-511pmq{flex-grow:1;overflow:auto;max-height:80vh}.container.svelte-511pmq{display:flex;overflow:auto;flex:1}#example-gantt-events.svelte-511pmq .sg-hover{background-color:#00000008}#example-gantt-events.svelte-511pmq .sg-hover .sg-table-body-cell{background-color:#00000008}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { SvelteGantt, SvelteGanttDependencies, SvelteGanttTable, MomentSvelteGanttDateAdapter } from \\"svelte-gantt\\";\\nimport { onMount } from \\"svelte\\";\\nimport TaskPopover from \\"../../components/TaskPopover.svelte\\";\\nimport { time, date } from \\"../../utils\\";\\nimport { db } from \\"../../lib/firebase.client\\";\\nimport { ref, set, onValue } from \\"firebase/database\\";\\nimport { rents } from \\"$lib/rents\\";\\nimport moment from \\"moment\\";\\nimport Modal from \\"../../components/Modal.svelte\\";\\nimport FormRent from \\"../../components/FormRent.svelte\\";\\nimport Swal from \\"sweetalert2\\";\\nlet rows = [];\\nlet tasks = [];\\nlet taskPopoverCoordinates = { x: 0, y: 0 };\\nlet isTaskPopoverVisible = false;\\nlet selectedTask = null;\\nlet showModal = false;\\nlet modalTitle = \\"\\";\\nlet pickedRent = {\\n  created: \\"\\",\\n  email: \\"\\",\\n  endDate: \\"\\",\\n  index: \\"\\",\\n  name: \\"\\",\\n  note: \\"\\",\\n  phone: \\"\\",\\n  shipping: false,\\n  startDate: \\"\\",\\n  updated: \\"\\",\\n  seatName: \\"\\",\\n  part: {\\n    color: \\"\\",\\n    created: \\"\\",\\n    index: \\"\\",\\n    name: \\"\\",\\n    note: \\"\\",\\n    productionDate: \\"\\",\\n    rentstart: \\"\\",\\n    serialNumber: \\"\\",\\n    type: \\"\\",\\n    updated: \\"\\"\\n  }\\n};\\nfunction getDatabaseRentData() {\\n  const rentRef = ref(db, \\"rent-baby-seat\\");\\n  onValue(rentRef, (snapshot) => {\\n    const rentData = snapshot.val();\\n    $rents = Object.values(rentData);\\n    $rents = $rents.map((rent) => {\\n      rent.seatName = rent.part.name;\\n      return rent;\\n    });\\n    const distinctSeats = distinctPartsByPartIndex($rents);\\n    distinctSeats.forEach((seat) => {\\n      rows.push({ id: seat.index, label: seat.name });\\n    });\\n    $rents.forEach((rent) => {\\n      tasks.push({\\n        id: rent.index,\\n        label: rent.name,\\n        resourceId: rent.part.index,\\n        from: date(rent.startDate),\\n        to: date(rent.endDate),\\n        enableDragging: false,\\n        enableResize: false,\\n        classes: \\"orange\\"\\n      });\\n    });\\n    window.gantt = gantt = new SvelteGantt({ target: document.getElementById(\\"example-gantt-events\\"), props: options });\\n    gantt.api.tasks.on.select((task) => handleEditItem(task));\\n  });\\n}\\nfunction distinctPartsByPartIndex(rents2) {\\n  const distinctParts = [];\\n  const seenIds = /* @__PURE__ */ new Set();\\n  rents2.forEach((rent) => {\\n    if (!seenIds.has(rent.part.index)) {\\n      seenIds.add(rent.part.index);\\n      distinctParts.push(rent.part);\\n    }\\n  });\\n  distinctParts.sort(sortSeatsByName);\\n  return distinctParts;\\n}\\nfunction sortSeatsByName(a, b) {\\n  if (a.name < b.name) {\\n    return -1;\\n  }\\n  if (a.name > b.name) {\\n    return 1;\\n  }\\n  return 0;\\n}\\nlet fromDate = \\"2024-06-01\\";\\nlet toDate = \\"2024-07-01\\";\\nlet currentStart = date(fromDate);\\nlet currentEnd = date(toDate);\\nlet data = {\\n  rows,\\n  tasks,\\n  dependencies: []\\n};\\nlet options = {\\n  dateAdapter: new MomentSvelteGanttDateAdapter(moment),\\n  rows: data.rows,\\n  tasks: data.tasks,\\n  dependencies: data.dependencies,\\n  timeRanges: [],\\n  columnOffset: 15,\\n  magnetOffset: 15,\\n  rowHeight: 52,\\n  rowPadding: 6,\\n  headers: [{ unit: \\"day\\", format: \\"dd DD.MM\\" }],\\n  fitWidth: false,\\n  minWidth: 2e3,\\n  // calculate minWidth by 90px x days\\n  from: currentStart,\\n  to: currentEnd,\\n  tableHeaders: [{ title: \\"Seats\\", property: \\"label\\", width: 140 }],\\n  tableWidth: 250,\\n  ganttTableModules: [SvelteGanttTable],\\n  ganttBodyModules: [SvelteGanttDependencies],\\n  taskElementHook: (node, task) => {\\n    let popup;\\n    function onHover(event) {\\n      taskPopoverCoordinates = { x: event.clientX + 5, y: event.clientY + 5 };\\n      selectedTask = task;\\n      isTaskPopoverVisible = true;\\n    }\\n    function onLeave() {\\n      isTaskPopoverVisible = false;\\n    }\\n    node.addEventListener(\\"mouseenter\\", onHover);\\n    node.addEventListener(\\"mouseleave\\", onLeave);\\n    return {\\n      destroy() {\\n        node.removeEventListener(\\"mouseenter\\", onHover);\\n        node.removeEventListener(\\"mouseleave\\", onLeave);\\n      }\\n    };\\n  }\\n  // taskContent: (task) => `${task.label} ${task.from.format(\'HH:mm\')}`\\n};\\nlet gantt;\\nonMount(() => {\\n  getDatabaseRentData();\\n});\\nfunction setCalendarDate() {\\n  options.from = date(fromDate);\\n  options.to = date(toDate);\\n  const daysBetweeen = moment(options.to).diff(moment(options.from), \\"days\\");\\n  options.minWidth = daysBetweeen * 90;\\n  gantt.$set(options);\\n}\\nfunction handleSaveItem(event) {\\n  showModal = false;\\n  event.detail.item.updated = moment().format(\\"DD.MM.YYYY HH:mm:ss\\");\\n  set(ref(db, `rent-baby-seat/${event.detail.item.index}`), event.detail.item).then(() => {\\n    Swal.fire({\\n      title: \\"Miete gespeichert\\",\\n      text: `Miete wurde ge\\\\xE4ndert`,\\n      icon: \\"success\\",\\n      allowOutsideClick: false,\\n      showConfirmButton: false,\\n      timer: 2e3\\n    });\\n    setInterval(() => {\\n      location.reload();\\n    }, 2e3);\\n  }).catch((error) => {\\n    Swal.fire({\\n      title: \\"Miete wurde nicht gespeichert\\",\\n      text: ``,\\n      icon: \\"error\\",\\n      allowOutsideClick: false,\\n      showConfirmButton: false,\\n      timer: 2e3\\n    });\\n    console.log(\\"Save error: \\" + error);\\n  });\\n}\\nfunction handleEditItem(task) {\\n  const myRent = $rents.find((rent) => rent.index === task[0].model.id);\\n  pickedRent = myRent;\\n  modalTitle = \\"Miete bearbeiten\\";\\n  showModal = true;\\n}\\n<\/script>\\n\\n<Modal bind:showModal>\\n\\t<h2 slot=\\"header\\">\\n\\t\\t{modalTitle}\\n\\t</h2>\\n\\n\\t<FormRent on:saveRent={handleSaveItem} rentObject={pickedRent} />\\n</Modal>\\n<div class=\\"container\\">\\n    <div class=\\"flex flex-col gap-4 mt-8\\">\\n        <div class=\\"flex gap-4\\">\\n            <div>\\n                <label for=\\"from\\" class=\\"block mb-2 text-sm font-medium text-gray-900\\">Von</label>\\n                <input type=\\"date\\" id=\\"from\\" class=\\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \\" placeholder=\\"Von\\" bind:value={fromDate} on:change={setCalendarDate} />\\n            </div>\\n            <div>\\n                <label for=\\"to\\" class=\\"block mb-2 text-sm font-medium text-gray-900\\">Von</label>\\n                <input type=\\"date\\" id=\\"to\\" class=\\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 \\" placeholder=\\"Bis\\" bind:value={toDate} on:change={setCalendarDate}/>\\n            </div>\\n        </div>\\n        <hr />\\n        <div id=\\"example-gantt-events\\"></div>\\n    </div>\\n    <TaskPopover task={selectedTask} coordinates={taskPopoverCoordinates} isVisible={isTaskPopoverVisible} />\\n</div>\\n\\n<style>\\n    #example-gantt-events {\\n        flex-grow: 1;\\n        overflow: auto;\\n        max-height: 80vh;\\n    }\\n\\n    .container {\\n        display: flex;\\n        overflow: auto;\\n        flex: 1;\\n    }\\n\\n    #example-gantt-events :global(.sg-hover) {\\n        background-color: #00000008;\\n    }\\n\\n    #example-gantt-events :global(.sg-hover .sg-table-body-cell) {\\n        background-color: #00000008;\\n    }\\n</style>"],"names":[],"mappings":"AAuNI,mCAAsB,CAClB,SAAS,CAAE,CAAC,CACZ,QAAQ,CAAE,IAAI,CACd,UAAU,CAAE,IAChB,CAEA,wBAAW,CACP,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,IAAI,CACd,IAAI,CAAE,CACV,CAEA,mCAAqB,CAAS,SAAW,CACrC,gBAAgB,CAAE,SACtB,CAEA,mCAAqB,CAAS,6BAA+B,CACzD,gBAAgB,CAAE,SACtB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_rents;
  $$unsubscribe_rents = subscribe(rents, (value) => value);
  let taskPopoverCoordinates = { x: 0, y: 0 };
  let isTaskPopoverVisible = false;
  let selectedTask = null;
  let showModal = false;
  let modalTitle = "";
  let pickedRent = {
    created: "",
    email: "",
    endDate: "",
    index: "",
    name: "",
    note: "",
    phone: "",
    shipping: false,
    startDate: "",
    updated: "",
    seatName: "",
    part: {
      color: "",
      created: "",
      index: "",
      name: "",
      note: "",
      productionDate: "",
      rentstart: "",
      serialNumber: "",
      type: "",
      updated: ""
    }
  };
  let fromDate = "2024-06-01";
  let toDate = "2024-07-01";
  date(fromDate);
  date(toDate);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header">${escape(modalTitle)}</h2>`;
        },
        default: () => {
          return `${validate_component(FormRent, "FormRent").$$render($$result, { rentObject: pickedRent }, {}, {})}`;
        }
      }
    )} <div class="container svelte-511pmq"><div class="flex flex-col gap-4 mt-8"><div class="flex gap-4"><div><label for="from" class="block mb-2 text-sm font-medium text-gray-900" data-svelte-h="svelte-q1df3d">Von</label> <input type="date" id="from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Von"${add_attribute("value", fromDate, 0)}></div> <div><label for="to" class="block mb-2 text-sm font-medium text-gray-900" data-svelte-h="svelte-e7fomw">Von</label> <input type="date" id="to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Bis"${add_attribute("value", toDate, 0)}></div></div> <hr> <div id="example-gantt-events" class="svelte-511pmq"></div></div> ${validate_component(TaskPopover, "TaskPopover").$$render(
      $$result,
      {
        task: selectedTask,
        coordinates: taskPopoverCoordinates,
        isVisible: isTaskPopoverVisible
      },
      {},
      {}
    )} </div>`;
  } while (!$$settled);
  $$unsubscribe_rents();
  return $$rendered;
});
export {
  Page as default
};
