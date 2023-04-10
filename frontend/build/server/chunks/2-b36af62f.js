import { r as redirect } from './index-1dce6fb5.js';
import axios from 'axios';
import { D as DIR } from './config-326b0707.js';
import './shared-server-fa63418b.js';

const load = async ({ cookies }) => {
  const token = cookies.get("connect.sid");
  const data = await axios({
    method: "GET",
    url: DIR + "/api/home/main",
    headers: { "Cookie": `connect.sid=${token}` }
  }).then((res) => res.data);
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
const component = async () => (await import('./_page.svelte-ec19554a.js')).default;
const file = '_app/immutable/entry/_page.svelte.d8df0724.js';
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/entry/_page.svelte.d8df0724.js","_app/immutable/chunks/index.f6f7890c.js","_app/immutable/chunks/navigation.67e2f0f6.js","_app/immutable/chunks/singletons.12dd5429.js"];
const stylesheets = ["_app/immutable/assets/_page.24c7375f.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-b36af62f.js.map
