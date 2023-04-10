import { c as create_ssr_component } from './index2-5fbea09f.js';

const css = {
  code: "div.svelte-jgh3m2{display:flex;flex-wrap:wrap;max-width:480px;margin-top:30px;padding:20px;border-radius:12px;background-color:#ffffff;box-shadow:0 2px 10px #888888;gap:20px}h1.svelte-jgh3m2{width:100%;text-align:center;font-size:40px}form.svelte-jgh3m2{display:flex;flex-wrap:wrap;width:100%;gap:12px}input.svelte-jgh3m2{width:100%;padding:14px;border:none;border-radius:6px;outline:1px solid #bbbbbb}input.svelte-jgh3m2:focus{outline:2px solid #3f74e7}button.svelte-jgh3m2{margin-left:auto;padding:10px 20px;border:none;background-color:#3f74e7;font-size:20px;font-weight:700;color:#ffffff;cursor:pointer}button.svelte-jgh3m2:hover{background-color:#3f84f7}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-jgh3m2"><h1 class="svelte-jgh3m2">Register</h1>
	<form action="http://localhost:4200/api/auth/register" method="POST" class="svelte-jgh3m2">${``}
		<input type="text" name="username" placeholder="Username" spellcheck="false" class="svelte-jgh3m2">
		<input type="password" name="password" placeholder="Password" class="svelte-jgh3m2">
		<button class="svelte-jgh3m2">Login
		</button></form>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f83371b1.js.map
