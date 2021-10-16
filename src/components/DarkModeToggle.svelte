<script>
	let isDarkMode = false;
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<style>
	:global(body.dark-mode) {
		background: black;
		color: white;
	}
</style>

<a on:click={toggleDarkMode}>{#if isDarkMode}turn on the light{:else}turn off the light{/if}</a>
