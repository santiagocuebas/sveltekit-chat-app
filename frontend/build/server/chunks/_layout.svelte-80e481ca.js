import { c as create_ssr_component } from './index2-bddd7714.js';

const css = {
  code: "*{margin:0;padding:0;font-size:16px}.main-container.svelte-zmbait{display:grid;position:fixed;justify-content:center;align-content:flex-start;width:100%;min-height:100%;background-color:#edf8fa}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-zmbait">${slots.default ? slots.default({}) : ``}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-80e481ca.js.map
