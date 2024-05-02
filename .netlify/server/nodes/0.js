import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DNHfiSGC.js","_app/immutable/chunks/firebase.client.CVyD5u1l.js","_app/immutable/chunks/scheduler.D3Ni6ET1.js","_app/immutable/chunks/index.BUH3kFHg.js","_app/immutable/chunks/session.DkOnbsHz.js","_app/immutable/chunks/index.CW2FmG8F.js","_app/immutable/chunks/entry.DRZsnFxf.js"];
export const stylesheets = ["_app/immutable/assets/0.h3G-ZOEy.css"];
export const fonts = [];
