<!--
TODO refactor this to show list of docs pages
-->

<script context="module">
	export function preload() {
		/* return this.fetch(`api/arrival/12312`).then(r => r.json()).then(posts => {
			return { posts };
		});; */
		return {'posts': [{'Name': 'Arrival', 'URL': 'arrival'}]};
	}
</script>

<script>
	export let posts;
	// console.log(posts)
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>API</title>
</svelte:head>

<h1>Available APIs</h1>

<ul>
	{#each posts as post}
		<!--we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel="prefetch" href="api/{post.slug}">{post.title}</a></li>-->
		<li><a prefetch href="api/{post.URL}">{post.Name}</a></li>
	{/each}
</ul>
