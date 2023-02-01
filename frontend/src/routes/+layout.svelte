<script lang="ts">
</script>

<div class="main-container">
	<slot></slot>
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
		min-height: 100vh;
		background-color: #edf8fa;
	}
</style>
