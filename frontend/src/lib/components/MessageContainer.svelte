<script lang="ts">
	import type { IMessage } from '$lib/global.js';
	import { afterUpdate } from 'svelte';
	import { format } from 'timeago.js';

	export let username: string;
	export let messages: IMessage[];
	export let alert: boolean;
	export let tempId: string;
	export let autoscroll: boolean;

	let div: HTMLDivElement;

	function deleteMessage(sender: string, id: string) {
		if (sender === username) {
			alert = true;
			tempId = id;
		}
	}
	
	afterUpdate(() => {
		if (autoscroll) {
			div.scrollTo(0, div.scrollHeight);
		}

		autoscroll = true;
	});
</script>

<div class="message-container" bind:this={div}>
	{#if messages.length > 0}
		{#each messages as message (message._id)}
		<div
			class='messages {message.from === username ? 'message-me' : ''}'
			on:dblclick={() => deleteMessage(message.from, message._id)}
		>
			<h3>{message.from}</h3>
			<p class="message-text">{message.body}</p>
			<p class="message-createdAt">{format(message.createdAt)}</p>
		</div>
		{/each}
	{/if}
</div>

<style>
	.message-container {
		display: grid;
		grid-auto-rows: min-content;
		width: 100%;
		max-height: 700px;
		padding: 5px;
		overflow-y: auto;
		scrollbar-width: none;
		gap: 9px;
	}

	.message-container div {
		display: grid;
		position: relative;
		grid-auto-rows: min-content;
		width: 60%;
		padding: 8px;
		border-radius: 8px;
		background-color: #ffffff;
		box-shadow: 0 0 1px #000000;
		user-select: none;
		row-gap: 3px;
		z-index: 50;
	}

	.message-container .message-me {
		justify-self: flex-end;
		background-color: #caeef1;
		cursor: pointer;
	}

	h3 {
		width: 100%;
		font-size: 18px;
	}

	.message-text {
		width: 100%;
		overflow-x: hidden;
		overflow-wrap: break-word;
	}

	.message-createdAt {
		justify-self: flex-end;
		font-size: 14px;
		color: #555555;
	}
</style>
