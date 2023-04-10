import { c as create_ssr_component } from './index2-5fbea09f.js';

const css = {
  code: "*{margin:0;padding:0;font-size:16px}.main-container.svelte-1j36rtu{display:grid;justify-content:center;align-content:flex-start;width:100vw;min-height:100vh;background-color:#edf8fa}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-1j36rtu">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-bea503f8.js.map
