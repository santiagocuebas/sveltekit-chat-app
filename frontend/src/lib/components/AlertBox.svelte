<script lang="ts">
  import type { Socket } from 'socket.io-client';
  import type { IMessage } from "$lib/global.js";

  export let socket: Socket;
  export let alert: boolean;
  export let tempId: string;
  export let messages: IMessage[];

  function closeAlert() {
    alert = false;
  }

  function deleteMessage() {
    socket.emit('delete', tempId);
    
    messages = messages.filter(message => message._id !== tempId);

    closeAlert();
  }
</script>

<div class="absolute">
  <div class="alert-container">
    <p>Want delete this message?</p>
    <button on:click={deleteMessage}>
      Accept
    </button>
    <button class="alert-cancel" on:click={closeAlert}>
      Cancel
    </button>
  </div>
</div>

<style>
  .absolute {
    display: grid;
    position: fixed;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #000000bb;
    z-index: 100;
  }

  .alert-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 500px;
    margin-top: 100px;
    padding: 20px;
    border-radius: 12px;
    background-color: #ffffff;
    gap: 10px;
  }

  p {
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
