<script lang="ts">
	import io from 'socket.io-client';
  import { afterUpdate, onMount } from 'svelte/internal';
	import type { Message } from '../lib/global.js';

	const socket = io('http://localhost:4200');

	let messages: Message[] = [];
	let message = '';
	let div: HTMLDivElement;

	afterUpdate(() => {
		div.scrollTo(0, div.scrollHeight);
	});

	function handleSubmit() {
		socket.emit('message', message);
		
		const newMessage: Message = {
			body: message,
			from: 'Me'
		};

		messages = [...messages, newMessage];
		message = '';
	}

	onMount(() => {
		const receiveMessage = (message: Message) => {
			if (message !== undefined) {
				messages = [...messages, message];
			}
		};

		socket.on('message', receiveMessage);

		return () => {
			socket.off('message', receiveMessage)
		}
	});
</script>

<div class="main-container">
	<h1>Sample Svelte Chat</h1>
	<form action="" on:submit|preventDefault={handleSubmit}>
		<input type="text" bind:value={message}>
	</form>
	{#if messages.length > 0}
	<div class="message-container" bind:this={div}>
		{#each messages as message}
		<div class={message.from === 'Me' ? 'message-me' : 'message-content'}>
			{message.from}: {message.body}
		</div>
		{/each}
	</div>
	{/if}
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		font-size: 16px;
	}

	.main-container {
		display: grid;
		justify-content: center;
		align-content: flex-start;
		width: 100vw;
		height: 100vh;
		row-gap: 50px;
	}

	h1 {
		margin-top: 20px;
		text-align: center;
		font-size: 48px;
	}

	form {
		display: flex;
		flex-wrap: wrap;
		min-width: 500px;
		padding: 20px;
		border-radius: 16px;
		box-shadow: 0 2px 10px #555555;
		gap: 12px;
	}

	input {
		width: 100%;
		padding: 8px 16px;
		border: none;
		outline: 1px solid #000000;
		border-radius: 4px;
		font-size: 20px;
	}

	input:focus {
		outline: 2px solid #000000;
	}

	.message-container {
		display: flex;
		flex-wrap: wrap;
		width: 500px;
		max-height: 500px;
		padding: 20px;
		border-radius: 16px;
		box-shadow: 0 2px 10px #555555;
		overflow-y: auto;
		gap: 8px;
	}

	.message-me, .message-content {
		width: 60%;
		padding: 10px;
		border-radius: 8px;
		font-size: 20px;
		font-weight: 700;
	}

	.message-me {
		margin-left: auto;
		background-color: #71adf1;
	}

	.message-content {
		background-color: #64d65a;
	}
</style>
