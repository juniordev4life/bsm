import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DPxh4ri7.js","_app/immutable/chunks/firebase.client.CYkZDNt3.js","_app/immutable/chunks/scheduler.DUxIorIS.js","_app/immutable/chunks/index.TZJU1juK.js","_app/immutable/chunks/session.DaHCFv1A.js","_app/immutable/chunks/index.CEZNqmr_.js","_app/immutable/chunks/entry.Qv61GHfL.js"];
export const stylesheets = ["_app/immutable/assets/0.9X2X3VEi.css"];
export const fonts = [];
