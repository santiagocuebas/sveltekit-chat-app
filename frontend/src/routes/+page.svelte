<script lang="ts">
	import type { PageServerData } from './$types';
	import io from 'socket.io-client';
  import { afterUpdate, onMount } from 'svelte/internal';
	import type { IMessage } from '$lib/global.js';
	import { DIR } from '$lib/config.js';
	import Form from '$lib/components/FormContainer.svelte';
	import Message from '$lib/components/MessageContainer.svelte';
	import Alert from '$lib/components/AlertBox.svelte';

	export let data: PageServerData;

	let messages: IMessage[] = [];
	let visibleMessages: IMessage[] = [];
	let alert = false;
	let tempId = '';
	let counter = 0;
	let autoscroll = true;
	let observer: IntersectionObserver;
	let unobserve: Element;

	const socket = io(DIR, { withCredentials: true });

	onMount(() => {
		observer = new IntersectionObserver(loadMoreChats);

		function loadMoreChats(entries: IntersectionObserverEntry[]) {
			if (entries[0].isIntersecting) {
				autoscroll = false;
				loadChats(20);
			}
		}

		const loadChats = (num: number) => {
			if (messages.length > counter) {
				for (let i = 0; i < num; i++) {
					if (messages[counter+i]) {
						visibleMessages = [messages[counter+i], ...visibleMessages];
					}
				}
				counter += num;
			}
		};
		
		const receiveChats = (allMessages: IMessage[]) => {
			messages = allMessages;
			loadChats(20);
		};

		const receiveMessage = (message: IMessage) => {
			visibleMessages = [...visibleMessages, message];
		};

		const deletingMessage = (_id: string) => {
			messages = messages.filter(message => message._id !== _id);
			visibleMessages = visibleMessages.filter(message => message._id !== _id);
		};

		socket.on('loadchats', receiveChats);

		socket.on('message', receiveMessage);

		socket.on('delete', deletingMessage);

		return () => {
			socket.off('loadchats', receiveChats);
			socket.off('message', receiveMessage);
			socket.off('delete', deletingMessage);
		}
	});

	afterUpdate(() => {
		const loadedMessages = document.querySelectorAll('.message-content');

		if (loadedMessages.length > 0) {
			observer.observe(loadedMessages[0]);

			if (unobserve && unobserve !== loadedMessages[0]) {
				observer.unobserve(unobserve);
			}

			unobserve = loadedMessages[0];
		};
	});
</script>

{#if alert}
	<Alert
		socket={socket}
		bind:alert={alert} 
		bind:tempId={tempId}
		bind:messages={messages}
	/>
{/if}

<h1>Sample Svelte Chat</h1>

<div>
	<Message
		username={data.username}
		bind:messages={visibleMessages}
		bind:alert={alert}
		bind:tempId={tempId}
		bind:autoscroll={autoscroll}
	/>
	<Form socket={socket} />
</div>

<style>
	h1 {
		margin: 20px 0;
		text-align: center;
		font-size: 48px;
	}
	
	div {
		display: flex;
		flex-wrap: wrap;
		width: 500px;
		min-height: 660px;
		padding: 20px;
		border-radius: 16px;
		background-image: url('smiley.jpg');
		box-shadow: 0 2px 10px #555555;
		gap: 20px;
	}
</style>
