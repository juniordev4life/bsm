

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/seats/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DiLTBDVc.js","_app/immutable/chunks/scheduler.DUxIorIS.js","_app/immutable/chunks/index.TZJU1juK.js","_app/immutable/chunks/Table-with-action-icons.CAR2qCkt.js","_app/immutable/chunks/seats.DKnIe1vl.js","_app/immutable/chunks/index.CEZNqmr_.js","_app/immutable/chunks/firebase.client.CYkZDNt3.js"];
export const stylesheets = ["_app/immutable/assets/seats.NFOvfied.css"];
export const fonts = [];
