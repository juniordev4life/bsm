

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cm8y-9aZ.js","_app/immutable/chunks/scheduler.D3Ni6ET1.js","_app/immutable/chunks/index.BUH3kFHg.js","_app/immutable/chunks/seats.B5sPRs0z.js","_app/immutable/chunks/index.CW2FmG8F.js","_app/immutable/chunks/firebase.client.CVyD5u1l.js"];
export const stylesheets = ["_app/immutable/assets/3.DoUWJC0j.css","_app/immutable/assets/seats.NFOvfied.css"];
export const fonts = [];
