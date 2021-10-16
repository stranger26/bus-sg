<script>
	import Nav from '$lib/Nav.svelte';
	import { page, navigating } from '$app/stores';

	$: section = $page.path.split('/')[1];
</script>

<style>
	main {
		padding: 32px;
	}
</style>

<Nav {section}/>

<main>
	<slot></slot>
</main>
