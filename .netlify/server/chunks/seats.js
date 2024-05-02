import { c as create_ssr_component, d as createEventDispatcher, f as each, e as escape, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
const Table_with_action_icons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { columns } = $$props;
  let { data } = $$props;
  let { properties } = $$props;
  createEventDispatcher();
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.properties === void 0 && $$bindings.properties && properties !== void 0)
    $$bindings.properties(properties);
  return `<div class="overflow-x-auto"><table class="min-w-full bg-white font-[sans-serif]"><thead class="bg-gray-800 whitespace-nowrap"><tr>${each(columns, (column) => {
    return `<th class="px-6 py-3 text-left text-sm font-semibold text-white"><button>${escape(column)}</button> </th>`;
  })} <th class="px-6 py-3 text-left text-sm font-semibold text-white"><button class="mr-4 mt-2" title="New" data-svelte-h="svelte-1jgfz2y"><svg viewBox="0 0 24 24" class="w-6 fill-blue-500 hover:fill-blue-700" xmlns="http://www.w3.org/2000/svg"><path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"></path><path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path></svg></button></th></tr></thead> <tbody class="whitespace-nowrap">${each(data, (item) => {
    return `<tr class="even:bg-blue-50">${each(properties, (property) => {
      return `<td class="px-6 py-4 text-sm">${escape(item[property])} </td>`;
    })} <td class="px-6 py-4"><button class="mr-4" title="Edit" data-svelte-h="svelte-ayiyw"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-blue-500 hover:fill-blue-700" viewBox="0 0 348.882 348.882"><path d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z" data-original="#000000"></path><path d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z" data-original="#000000"></path></svg></button> <button class="mr-4" title="Delete" data-svelte-h="svelte-10itez5"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24"><path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path><path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path></svg> </button></td> </tr>`;
  })}</tbody></table></div>`;
});
const css = {
  code: "dialog.svelte-rpeh7x.svelte-rpeh7x{max-width:32rem;border-radius:0.5rem;border:none;padding:0}dialog.svelte-rpeh7x.svelte-rpeh7x::backdrop{background:rgba(0, 0, 0, 0.3)}dialog.svelte-rpeh7x>div.svelte-rpeh7x{padding:2rem}dialog[open].svelte-rpeh7x.svelte-rpeh7x{animation:svelte-rpeh7x-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-rpeh7x-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-rpeh7x.svelte-rpeh7x::backdrop{animation:svelte-rpeh7x-fade 0.2s ease-out}@keyframes svelte-rpeh7x-fade{from{opacity:0}to{opacity:1}}",
  map: '{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<script>\\n\\texport let showModal; // boolean\\n\\n\\tlet dialog; // HTMLDialogElement\\n\\n\\t$: if (dialog && showModal) dialog.showModal();\\n<\/script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->\\n{#if showModal}\\n<dialog\\n\\tbind:this={dialog}\\n\\ton:close={() => (showModal = false)}\\n\\ton:click|self={() => dialog.close()}\\n>\\n\\t<!-- svelte-ignore a11y-no-static-element-interactions -->\\n\\t<div on:click|stopPropagation>\\n\\t\\t<slot name=\\"header\\" />\\n\\t\\t<hr />\\n\\t\\t<slot />\\n\\t\\t<!-- svelte-ignore a11y-autofocus -->\\n\\t\\t<!--<button autofocus on:click={() => dialog.close()}>close modal</button>-->\\n\\t</div>\\n</dialog>\\n{/if}\\n\\n\\n<style>\\n\\tdialog {\\n\\t\\tmax-width: 32rem;\\n\\t\\tborder-radius: 0.5rem;\\n\\t\\tborder: none;\\n\\t\\tpadding: 0;\\n\\t}\\n\\tdialog::backdrop {\\n\\t\\tbackground: rgba(0, 0, 0, 0.3);\\n\\t}\\n\\tdialog > div {\\n\\t\\tpadding: 2rem;\\n\\t}\\n\\tdialog[open] {\\n\\t\\tanimation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\\n\\t}\\n\\t@keyframes zoom {\\n\\t\\tfrom {\\n\\t\\t\\ttransform: scale(0.95);\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\ttransform: scale(1);\\n\\t\\t}\\n\\t}\\n\\tdialog[open]::backdrop {\\n\\t\\tanimation: fade 0.2s ease-out;\\n\\t}\\n\\t@keyframes fade {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4BC,kCAAO,CACN,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,MAAM,CACrB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CACV,CACA,kCAAM,UAAW,CAChB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC9B,CACA,oBAAM,CAAG,iBAAI,CACZ,OAAO,CAAE,IACV,CACA,MAAM,CAAC,IAAI,6BAAE,CACZ,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,aAAa,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CACtD,CACA,WAAW,kBAAK,CACf,IAAK,CACJ,SAAS,CAAE,MAAM,IAAI,CACtB,CACA,EAAG,CACF,SAAS,CAAE,MAAM,CAAC,CACnB,CACD,CACA,MAAM,CAAC,IAAI,6BAAC,UAAW,CACtB,SAAS,CAAE,kBAAI,CAAC,IAAI,CAAC,QACtB,CACA,WAAW,kBAAK,CACf,IAAK,CACJ,OAAO,CAAE,CACV,CACA,EAAG,CACF,OAAO,CAAE,CACV,CACD"}'
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  return ` ${showModal ? `<dialog class="svelte-rpeh7x"${add_attribute("this", dialog, 0)}> <div class="svelte-rpeh7x">${slots.header ? slots.header({}) : ``} <hr> ${slots.default ? slots.default({}) : ``}  </div></dialog>` : ``}`;
});
const seats = writable();
export {
  Modal as M,
  Table_with_action_icons as T,
  seats as s
};