import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { T as Table_with_action_icons } from "../../../chunks/Table-with-action-icons.js";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
import { r as rents, F as FormRent } from "../../../chunks/FormRent.js";
import { M as Modal } from "../../../chunks/seats.js";
import "dayjs";
import "sweetalert2";
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
