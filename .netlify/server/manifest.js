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
		client: {"start":"_app/immutable/entry/start.CVtCMfJx.js","app":"_app/immutable/entry/app.5QrVvE9P.js","imports":["_app/immutable/entry/start.CVtCMfJx.js","_app/immutable/chunks/entry.Qv61GHfL.js","_app/immutable/chunks/scheduler.DUxIorIS.js","_app/immutable/chunks/index.CEZNqmr_.js","_app/immutable/entry/app.5QrVvE9P.js","_app/immutable/chunks/scheduler.DUxIorIS.js","_app/immutable/chunks/index.TZJU1juK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
				id: "/calendar",
				pattern: /^\/calendar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/rents",
				pattern: /^\/rents\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/seats",
				pattern: /^\/seats\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
