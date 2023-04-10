const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","smiley.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d080a67f.js","imports":["_app/immutable/entry/start.d080a67f.js","_app/immutable/chunks/index.f6f7890c.js","_app/immutable/chunks/singletons.12dd5429.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9001b480.js","imports":["_app/immutable/entry/app.9001b480.js","_app/immutable/chunks/index.f6f7890c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-4212eb9e.js'),
			() => import('./chunks/1-dfd35215.js'),
			() => import('./chunks/2-b36af62f.js'),
			() => import('./chunks/3-d4f351ce.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
