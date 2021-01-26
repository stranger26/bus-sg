<script>
	import { isDarkMode } from '../stores';

	let isDarkMode_value;
	const unsubscribe = isDarkMode.subscribe(value => {
		isDarkMode_value = value;
		typeof window !== "undefined" && localStorage.setItem("isDarkMode", value);
	});

	function toggleDarkMode() {
		if (isDarkMode_value==1) {window.document.body.classList.add('dark-mode');}
		else {window.document.body.classList.remove('dark-mode');}
		isDarkMode.update(n => n==1 ? 2 : 1);
	}
</script>

<style>
	:global(body.dark-mode) {
		background: black;
		color: white;
	}
</style>

<a on:click={toggleDarkMode}>{#if isDarkMode_value==1}turn off the light{:else}turn on the light{/if}</a>
