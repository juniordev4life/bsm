

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3b-XhSYz.js","_app/immutable/chunks/scheduler.D3Ni6ET1.js","_app/immutable/chunks/index.BUH3kFHg.js","_app/immutable/chunks/session.DkOnbsHz.js","_app/immutable/chunks/index.CW2FmG8F.js","_app/immutable/chunks/firebase.client.CVyD5u1l.js","_app/immutable/chunks/entry.DRZsnFxf.js"];
export const stylesheets = [];
export const fonts = [];
