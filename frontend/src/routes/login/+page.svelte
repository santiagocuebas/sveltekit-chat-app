<script lang="ts">
  import { goto } from "$app/navigation";
	import type { ResponseData, DataItem } from '$lib/global.js';
	import Error from '$lib/components/ErrorBox.svelte';

	let errors: DataItem = {};
	let visible = false;

	const changeError = (value: boolean) => visible = value;

	const setErrors = (data: DataItem) => errors = data;

	async function handleSubmit(this: HTMLFormElement) {
		const data: ResponseData = await fetch(this.action, {
			method: this.method,
			credentials: 'include',
			body: new FormData(this)
		}).then(res => res.json());

		if (data.error) {
			console.log(data.error);
		} else if (data.errors) {
			changeError(true);
			setErrors(data.errors as DataItem);
		} else if (typeof data.url === 'string') {
			goto('/');
		}
	};
</script>

<div>
	<h1>Register</h1>
	<form
		action="http://localhost:4200/api/auth/register"
		method="POST"
		on:submit|preventDefault={handleSubmit}
	>
		{#if visible}
			<Error hide={changeError} errors={errors} />
		{/if}
		<input type="text" name="username" placeholder="Username" spellcheck="false">
		<input type="password" name="password" placeholder="Password">
		<button>
			Login
		</button>
	</form>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		max-width: 480px;
		margin-top: 30px;
		padding: 20px;
		border-radius: 12px;
		background-color: #ffffff;
		box-shadow: 0 2px 10px #888888;
		gap: 20px;
	}

	h1 {
		width: 100%;
		text-align: center;
		font-size: 40px;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 12px;
	}

	input {
		width: 100%;
		padding: 14px;
		border: none;
		border-radius: 6px;
		outline: 1px solid #bbbbbb;
	}

	input:focus {
		outline: 2px solid #3f74e7;
	}

	button {
		margin-left: auto;
		padding: 10px 20px;
		border: none;
		background-color: #3f74e7;
		font-size: 20px;
		font-weight: 700;
		color: #ffffff;
		cursor: pointer;
	}

	button:hover {
		background-color: #3f84f7;
	}
</style>
