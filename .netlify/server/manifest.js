export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CC1opUAG.js","app":"_app/immutable/entry/app.CkhAkAy5.js","imports":["_app/immutable/entry/start.CC1opUAG.js","_app/immutable/chunks/entry.DRZsnFxf.js","_app/immutable/chunks/scheduler.D3Ni6ET1.js","_app/immutable/chunks/index.CW2FmG8F.js","_app/immutable/entry/app.CkhAkAy5.js","_app/immutable/chunks/scheduler.D3Ni6ET1.js","_app/immutable/chunks/index.BUH3kFHg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/rents",
				pattern: /^\/rents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/seats",
				pattern: /^\/seats\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
