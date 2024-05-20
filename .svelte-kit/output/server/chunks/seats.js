import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
import { w as writable } from "./index.js";
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
  seats as s
};
