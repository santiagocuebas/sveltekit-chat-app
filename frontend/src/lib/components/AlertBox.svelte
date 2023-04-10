<script lang="ts">
  import type { Socket } from 'socket.io-client';
  import type { IMessage } from "$lib/global.js";

  export let socket: Socket;
  export let alert: boolean;
  export let tempId: string;
  export let messages: IMessage[];

  function deleteMessage() {
    socket.emit('delete', tempId);
    
    messages = messages.filter(message => message._id !== tempId);

    alert = false;;
  }
</script>

<div class="absolute">
  <div class="alert-container">
    <h3>Want delete this message?</h3>
    <button on:click={deleteMessage}>
      Accept
    </button>
    <button class="alert-cancel" on:click={() => alert = false}>
      Cancel
    </button>
  </div>
</div>

<style>
  .absolute {
    display: grid;
    position: absolute;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
		border-radius: 16px;
    background-color: #000000bb;
    z-index: 100;
  }

  .alert-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 500px;
    margin-top: 200px;
    padding: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    gap: 10px;
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }

  button {
    width: 100px;
    padding: 8px 20px;
    border: none;
    background-color: #2797e2;
    box-shadow: 0 0 2px #000000;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
  }

  button:hover {
    background-color: #2797d2;
  }

  .alert-cancel {
    background-color: #e24c27;
  }

  .alert-cancel:hover {
    background-color: #d24c27;
  }
</style>
