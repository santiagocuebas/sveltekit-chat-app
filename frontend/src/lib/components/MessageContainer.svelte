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
		class={`message-content ${message.from === username ? 'message-me' : ''}`}
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
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		max-height: 600px;
		overflow-y: auto;
		overflow-x: hidden;
		overscroll-behavior-y: contain;
		scrollbar-width: none;
		gap: 8px;
	}

	.message-content {
		display: flex;
		position: relative;
		flex-wrap: wrap;
		width: 60%;
		padding: 10px;
		border-radius: 8px;
		background-color: #ffffff;
		user-select: none;
		gap: 4px;
		z-index: 50;
	}

	.message-me {
		margin-left: auto;
		background-color: #caeef1;
		cursor: pointer;
	}

	h3 {
		width: 100%;
		font-size: 18px;
	}

	.message-text {
		width: 100%;
		overflow-wrap: break-word;
	}

	.message-createdAt {
		margin-left: auto;
		font-size: 14px;
		color: #555555;
	}
</style>
