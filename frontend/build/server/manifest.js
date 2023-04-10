const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","smiley.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c7c081cb.js","imports":["_app/immutable/entry/start.c7c081cb.js","_app/immutable/chunks/index.654041f3.js","_app/immutable/chunks/singletons.08f0a181.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c6584e85.js","imports":["_app/immutable/entry/app.c6584e85.js","_app/immutable/chunks/index.654041f3.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-6f6e4bfd.js'),
			() => import('./chunks/1-5b6f9051.js'),
			() => import('./chunks/2-be952709.js').then(function (n) { return n._; }),
			() => import('./chunks/3-c0b688e2.js')
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
