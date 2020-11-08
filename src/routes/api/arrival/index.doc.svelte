<script context="module">
	export function preload() {
		return this.fetch(`api/arrival?day=1`).then(r => r.json()).then(posts => {
			return { posts };
		});;
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
	<title>Bus Arrival | API Docs</title>
</svelte:head>

<h1>Bus Arrival</h1>

<ul>
	{#each posts.Services as post}
		<!--we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel="prefetch" href="api/{post.slug}">{post.title}</a></li>-->
		<li>{post.ServiceNo}</li>
	{/each}
</ul>
