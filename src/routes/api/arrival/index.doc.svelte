<script context="module">
	import RecentStops from '$lib/RecentStops.svelte';

	let recentStopsComponent;
	/*export function preload() {
		return this.fetch(`api/arrival/20251`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}*/
</script>

<script>
	import moment from 'moment';

	let busNoInput = null;
	let posts = {'Services':[]};
	let busNoOutput = null;

	async function lookupStop(busNo) {
		// alert(busNoInput);
		busNoOutput = busNo;
		posts = await fetch(`/api/arrival/`+busNo).then(r => r.json()).then(posts => {
			return posts;
		});

		recentStopsComponent.addRecentStop(busNo, busNo);
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

<RecentStops bind:this={recentStopsComponent}/>
<h1>Bus Arrival for {#if busNoOutput}{busNoOutput}{:else}Bus Stop{/if}</h1>
<!--TODO
API endpoint
Usage
Input
Output
Errors?
-->
<input type="number" max="999999" bind:value={busNoInput}>
<button on:click={lookupStop(busNoInput)}>Go</button>
<p>{posts.Services.length} service(s) available</p>
<ul>
	{#each posts.Services as post}
		<!--we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel="prefetch" href="api/{post.slug}">{post.title}</a></li>-->
		<li>{post.ServiceNo} {#if moment(post.NextBus.EstimatedArrival).isAfter(moment())}coming{:else}left{/if} {moment(post.NextBus.EstimatedArrival).fromNow()}{#if post.NextBus2.EstimatedArrival!=""}, next bus {#if moment(post.NextBus2.EstimatedArrival).isAfter(moment())}coming{:else}left{/if} {moment(post.NextBus2.EstimatedArrival).fromNow()}{/if}{#if post.NextBus3.EstimatedArrival!=""}, next bus {#if moment(post.NextBus3.EstimatedArrival).isAfter(moment())}coming{:else}left{/if} {moment(post.NextBus3.EstimatedArrival).fromNow()}{/if}</li>
	{/each}
</ul>
