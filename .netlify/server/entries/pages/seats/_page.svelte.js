import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { s as seats, M as Modal, T as Table_with_action_icons } from "../../../chunks/seats.js";
import "firebase/app";
import "firebase/auth";
import "firebase/database";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $seats, $$unsubscribe_seats;
  $$unsubscribe_seats = subscribe(seats, (value) => $seats = value);
  let showModal = false;
  let modalTitle = "";
  let hasSeats = false;
  let coloumns = ["Name", "Seriennummer", "Farbe", "Flugzeugzulassung", "Ender Vermietung"];
  let properties = ["name", "serialNumber", "color", "note", "rentend"];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasSeats = !!$seats ? true : false;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-8rp9m1_START -->${$$result.title = `<title>Bear Seat Manager - Babysitze</title>`, ""}<!-- HEAD_svelte-8rp9m1_END -->`, ""} ${validate_component(Modal, "Modal").$$render(
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
          return `<div data-svelte-h="svelte-1j1017w"></div> <a href="https://www.merriam-webster.com/dictionary/modal" data-svelte-h="svelte-vmqtc3">merriam-webster.com</a>`;
        }
      }
    )} ${hasSeats ? `${validate_component(Table_with_action_icons, "TableList").$$render(
      $$result,
      {
        columns: coloumns,
        data: $seats,
        properties
      },
      {},
      {}
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_seats();
  return $$rendered;
});
export {
  Page as default
};
