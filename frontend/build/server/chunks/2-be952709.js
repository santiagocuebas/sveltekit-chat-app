import { p as public_env, r as redirect } from './index-c8c7c629.js';

const DIR = public_env.PUBLIC_DIR;

const load = async ({ cookies, fetch }) => {
  const data = await fetch(DIR + "/api/home/main").then((res) => res.json());
  if (data.error) {
    cookies.delete("connect.sid");
    throw redirect(307, "/login");
  }
  return data;
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-25899c52.js')).default;
const file = '_app/immutable/entry/_page.svelte.5da487d7.js';
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/entry/_page.svelte.5da487d7.js","_app/immutable/chunks/index.654041f3.js","_app/immutable/chunks/navigation.03eac770.js","_app/immutable/chunks/singletons.08f0a181.js"];
const stylesheets = ["_app/immutable/assets/_page.741c3099.css"];
const fonts = [];

var _2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  component: component,
  file: file,
  fonts: fonts,
  imports: imports,
  index: index,
  server: _page_server_ts,
  server_id: server_id,
  stylesheets: stylesheets
});

export { DIR as D, _2 as _ };
//# sourceMappingURL=2-be952709.js.map
