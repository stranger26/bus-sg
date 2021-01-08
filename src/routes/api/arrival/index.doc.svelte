<script context="module">
	export function preload() {
		return this.fetch(`api/arrival/20251`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import moment from 'moment';
	let busNoInput = 0;
	let busno = 0;
	// console.log(posts)
	let posts = {'Services':[]};

	async function lookupStop() {
		// alert(busNoInput);
		busno = busNoInput;
		posts = await fetch(`api/arrival/`+busno).then(r => r.json()).then(posts => {
			return posts;
		});
	}

	// export let posts;
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

<h1>Bus Arrival for Bus {busno} ({posts.BusStopCode})</h1>
<!--TODO
API endpoint
Usage
Input
Output
Errors?
-->
<input type="number" max="999999" bind:value={busNoInput}>
<button on:click={lookupStop}>Go</button>
<p>{posts.Services.length} service(s) available</p>
<ul>
	{#each posts.Services as post}
		<!--we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel="prefetch" href="api/{post.slug}">{post.title}</a></li>-->
		<li>{post.ServiceNo} coming in {moment(post.NextBus.EstimatedArrival).fromNow()}</li>
	{/each}
</ul>
