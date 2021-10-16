<script>
	let isDarkMode = false;

	try {
		(isDarkMode != localStorage.isDarkMode) && toggleDarkMode();
		isDarkMode = localStorage.isDarkMode;
	} catch (e) {
	}

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		window.document.body.classList.toggle('dark-mode');

		try {
			localStorage.isDarkMode = isDarkMode;
		} catch (e) {
			// ignore
		}
	}
</script>

<style>
	svg {
		height: 24px;
		width: 24px;
		fill:  var(--fg);
	}
</style>

<div on:click={toggleDarkMode}>
	<svg viewBox="0 0 24 24">
		{#if isDarkMode}
			<path class="light" d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" />
		{:else}
			<path class="dark" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
		{/if}
	</svg>
</div>
