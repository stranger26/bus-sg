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

	function lookupRecentStop(event) {
		lookupStop(event.detail.busStopCode)
	}

	// export let posts;
</script>

<style>
	.list {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	.list-busno {
		border: solid 1px black;
		padding: 2px 4px;
		display: inline-block;
	}

	.list-bustiming {
		display: inline-block;
		margin-right: 5px;
	}

	.dark-mode .list-busno {
		border: solid 1px white;
	}
</style>

<svelte:head>
	<title>Bus Arrival | API Docs</title>
</svelte:head>

<RecentStops bind:this={recentStopsComponent} on:message={lookupRecentStop}/>
<h1>Bus Arrival for {#if busNoOutput}{busNoOutput}{:else}Bus Stop{/if}</h1>
<!--TODO
API endpoint
Usage
Input
Output
Errors?
-->
<input id="busno-input" type="number" max="999999" bind:value={busNoInput}>
<button id="busno-search" on:click={lookupStop(busNoInput)}>Go</button>
<p>{posts.Services.length} service(s) available</p>
<div class="list">
	{#each posts.Services as post}
		<!--we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li><a rel="prefetch" href="api/{post.slug}">{post.title}</a></li>-->
		<div class="list-item"><div class="list-busno">{post.ServiceNo}</div> <div class="list-bustiming">{moment(post.NextBus.EstimatedArrival).fromNow(true)}</div>{#if post.NextBus2.EstimatedArrival!=""}<div class="list-bustiming">{moment(post.NextBus2.EstimatedArrival).fromNow(true)}</div>{/if}{#if post.NextBus3.EstimatedArrival!=""}<div class="list-bustiming">{moment(post.NextBus3.EstimatedArrival).fromNow(true)}</div>{/if}</div>
	{/each}
</div>
