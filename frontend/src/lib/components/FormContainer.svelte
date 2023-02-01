<script lang="ts">
  import { goto } from '$app/navigation';
  import type { Socket } from 'socket.io-client';

  export let socket: Socket;
  
	let message = '';

  function handleSubmit() {
		socket.emit('message', message);

		message = '';
	}

	async function handleLogout() {
		const data = await fetch('http://localhost:4200/api/auth/logout', {
			method: 'POST',
			credentials: 'include',
			body: null
		}).then(res => res.json());

		if (data.error) {
			console.log(data.error);
		} else if (data.url) {
			return goto('/login');
		}
	}
</script>

<div>
  <form action="" on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Message" bind:value={message}>
  </form>
  <button title="logout" on:click={handleLogout}>
    <i class="fa-solid fa-right-from-bracket"></i>
  </button>
</div>

<style>
  div {
		display: flex;
		align-self: flex-end;
		width: 100%;
		height: min-content;
		gap: 12px;
	}

	form {
		display: flex;
		width: 100%;
	}

	input {
		width: 100%;
		padding: 8px 20px;
		border: none;
		outline: 1px solid #000000;
		border-radius: 20px;
		font-size: 20px;
	}

	input:focus {
		outline: 2px solid #000000;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		border: none;
		border-radius: 50%;
		background-color: #e2514c;
		font-size: 20px;
		color: #ffffff;
		cursor: pointer;
	}

	i {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>
