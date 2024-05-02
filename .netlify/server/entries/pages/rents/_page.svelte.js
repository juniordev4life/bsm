import { c as create_ssr_component, a as subscribe, d as createEventDispatcher, f as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { s as seats, M as Modal, T as Table_with_action_icons } from "../../../chunks/seats.js";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import { w as writable } from "../../../chunks/index.js";
import "dayjs";
import "sweetalert2";
const rents = writable();
const css = {
  code: "input.svelte-18q0cxj,select.svelte-18q0cxj{border-radius:0.25rem;border-width:2px;--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem\n}",
  map: `{"version":3,"file":"FormRent.svelte","sources":["FormRent.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nimport { db } from \\"../lib/firebase.client\\";\\nimport { ref, onValue } from \\"firebase/database\\";\\nimport { seats } from \\"$lib/seats\\";\\nimport { onMount } from \\"svelte\\";\\nconst dispatch = createEventDispatcher();\\nexport let rentObject;\\nlet hasSeats = false;\\nlet seatSelected;\\nfunction getDatabaseSeatData() {\\n  const seatRef = ref(db, \\"baby-seat\\");\\n  onValue(seatRef, (snapshot) => {\\n    const seatData = snapshot.val();\\n    $seats = Object.values(seatData);\\n  });\\n}\\nfunction saveItem() {\\n  dispatch(\\"saveRent\\", {\\n    item: rentObject\\n  });\\n}\\n$:\\n  hasSeats = !!$seats ? true : false;\\nonMount(() => {\\n  getDatabaseSeatData();\\n});\\n<\/script>\\n\\n{#if hasSeats}\\n<div class=\\"flex gap-4 flex-col mt-3\\">\\n\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t<label>Sitz</label>\\n\\t{#if rentObject.name === ''}\\n\\t\\t<select  bind:value={seatSelected} aria-label=\\"Sitz\\" on:change={() => (rentObject.part = seatSelected)}>\\n\\t\\t\\t{#each $seats as seat}\\n\\t\\t\\t\\t <option value={seat}>{seat.name}</option>\\n\\t\\t\\t{/each}\\n\\t\\t</select>\\n\\t{:else}\\n\\t\\t<input bind:value={rentObject.part.name} type=\\"text\\" readonly disabled aria-label=\\"Sitz\\" />\\n\\t{/if}\\n\\t</div>\\n\\t<div class=\\"flex gap-2\\">\\n\\t\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t\\t<label>Von</label>\\n\\t\\t\\t<input  bind:value={rentObject.startDate} type=\\"date\\" aria-label=\\"Von\\" />\\n\\t\\t</div>\\n\\t\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t\\t<label>Bis</label>\\n\\t\\t\\t<input  bind:value={rentObject.endDate} type=\\"date\\" aria-label=\\"Bis\\" />\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t<label>Name</label>\\n\\t\\t<input  bind:value={rentObject.name} type=\\"text\\" aria-label=\\"Name\\" />\\n\\t</div>\\n\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t<label>E-Mail</label>\\n\\t\\t<input  bind:value={rentObject.email} type=\\"text\\" aria-label=\\"E-Mail\\" />\\n\\t</div>\\n\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t<label>Telefon</label>\\n\\t\\t<input  bind:value={rentObject.phone} type=\\"text\\" aria-label=\\"Telefon\\" />\\n\\t</div>\\n\\t<div class=\\"flex gap-1 flex-row\\">\\n\\t\\t<label>Mit Versand</label>\\n\\t\\t<input  bind:value={rentObject.shipping} type=\\"checkbox\\" aria-label=\\"Mit Versand\\" />\\n\\t</div>\\n\\t<div class=\\"flex gap-1 flex-col\\">\\n\\t\\t<label>Notiz</label>\\n\\t\\t<input  bind:value={rentObject.note} type=\\"text\\" aria-label=\\"Notiz\\" />\\n\\t</div>\\n\\t<div class=\\"mt-5 flex justify-center gap-x-8 text-center\\">\\n\\t\\t<button class=\\"p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300\\" on:click={saveItem}>\\n\\t\\t\\tSpeichern\\n\\t\\t</button>\\n\\t</div>\\n</div>\\n{/if}\\n\\n<style>\\n  input, select {\\n    border-radius: 0.25rem;\\n    border-width: 2px;\\n    --tw-border-opacity: 1;\\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\n    padding-left: 0.5rem;\\n    padding-right: 0.5rem;\\n    padding-top: 0.25rem;\\n    padding-bottom: 0.25rem\\n}\\n</style>\\n"],"names":[],"mappings":"AAiFE,oBAAK,CAAE,qBAAO,CACZ,aAAa,CAAE,OAAO,CACtB,YAAY,CAAE,GAAG,CACjB,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CACzD,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CACzD,YAAY,CAAE,MAAM,CACpB,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,OAAO,CACpB,cAAc,CAAE,OAAO;AAC3B"}`
};
const FormRent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seats, $$unsubscribe_seats;
  $$unsubscribe_seats = subscribe(seats, (value) => $seats = value);
  createEventDispatcher();
  let { rentObject } = $$props;
  let hasSeats = false;
  if ($$props.rentObject === void 0 && $$bindings.rentObject && rentObject !== void 0)
    $$bindings.rentObject(rentObject);
  $$result.css.add(css);
  hasSeats = !!$seats ? true : false;
  $$unsubscribe_seats();
  return `${hasSeats ? `<div class="flex gap-4 flex-col mt-3"><div class="flex gap-1 flex-col"><label data-svelte-h="svelte-1824aom">Sitz</label> ${rentObject.name === "" ? `<select aria-label="Sitz" class="svelte-18q0cxj">${each($seats, (seat) => {
    return `<option${add_attribute("value", seat, 0)}>${escape(seat.name)}</option>`;
  })}</select>` : `<input type="text" readonly disabled aria-label="Sitz" class="svelte-18q0cxj"${add_attribute("value", rentObject.part.name, 0)}>`}</div> <div class="flex gap-2"><div class="flex gap-1 flex-col"><label data-svelte-h="svelte-ny4i3z">Von</label> <input type="date" aria-label="Von" class="svelte-18q0cxj"${add_attribute("value", rentObject.startDate, 0)}></div> <div class="flex gap-1 flex-col"><label data-svelte-h="svelte-1r150sa">Bis</label> <input type="date" aria-label="Bis" class="svelte-18q0cxj"${add_attribute("value", rentObject.endDate, 0)}></div></div> <div class="flex gap-1 flex-col"><label data-svelte-h="svelte-ry910h">Name</label> <input type="text" aria-label="Name" class="svelte-18q0cxj"${add_attribute("value", rentObject.name, 0)}></div> <div class="flex gap-1 flex-col"><label data-svelte-h="svelte-1ijkqu7">E-Mail</label> <input type="text" aria-label="E-Mail" class="svelte-18q0cxj"${add_attribute("value", rentObject.email, 0)}></div> <div class="flex gap-1 flex-col"><label data-svelte-h="svelte-1kmfkgn">Telefon</label> <input type="text" aria-label="Telefon" class="svelte-18q0cxj"${add_attribute("value", rentObject.phone, 0)}></div> <div class="flex gap-1 flex-row"><label data-svelte-h="svelte-1uo2cwh">Mit Versand</label> <input type="checkbox" aria-label="Mit Versand" class="svelte-18q0cxj"${add_attribute("value", rentObject.shipping, 0)}></div> <div class="flex gap-1 flex-col"><label data-svelte-h="svelte-1l50mly">Notiz</label> <input type="text" aria-label="Notiz" class="svelte-18q0cxj"${add_attribute("value", rentObject.note, 0)}></div> <div class="mt-5 flex justify-center gap-x-8 text-center"><button class="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300" data-svelte-h="svelte-164fdr7">Speichern</button></div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $rents, $$unsubscribe_rents;
  $$unsubscribe_rents = subscribe(rents, (value) => $rents = value);
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
  let hasRents = false;
  let coloumns = ["Sitz", "Mieter", "Email", "Startdatum", "Enddatum"];
  let properties = ["seatName", "name", "email", "startDate", "endDate"];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasRents = !!$rents ? true : false;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1319f0k_START -->${$$result.title = `<title>Bear Seat Manager - Mieten</title>`, ""}<!-- HEAD_svelte-1319f0k_END -->`, ""} ${validate_component(Modal, "Modal").$$render(
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
    )} ${hasRents ? `${validate_component(Table_with_action_icons, "TableList").$$render(
      $$result,
      {
        columns: coloumns,
        data: $rents,
        properties
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_rents();
  return $$rendered;
});
export {
  Page as default
};
