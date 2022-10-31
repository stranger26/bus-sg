<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	// import {lookupStop} from '$routes/api/arrival/index.doc.svelte';
	let recentStops = []; // [{busStopCode:12,busStopName:abc}]

	try {
		recentStops = JSON.parse(localStorage.recentStops);
	} catch (e) {
	}

	export function addRecentStop(busStopCode, busStopName) {
		recentStops.unshift({busStopCode:busStopCode,busStopName:busStopName})
		const uniqueRecentStops = [... new Set(recentStops.map(JSON.stringify))].map(JSON.parse)
		localStorage.recentStops = JSON.stringify(uniqueRecentStops.slice(0,5));
	}

	function clickRecentStop(busStopCode) {
		console.log("click lorrr "+busStopCode);
		dispatch('message', {
			busStopCode: busStopCode
		});
		// document.querySelector('#busno-input').value = busStopCode;
		// document.querySelector('#busno-search').click();
		// lookupStop(busStopCode);
		/**
		try {
			localStorage.recentStops = recentStops;
		} catch (e) {
			// ignore
		}**/
	}

	function clearRecentStops() {
		recentStops = [];
		localStorage.recentStops = "[]";
	}
</script>

<style>
	.recent-stop-button {
		margin-right: 8px;
		padding: 4px 8px;
	}
</style>

{#if recentStops.length>0}
<div class="recent-stop-container">
	Recent stops: 
	{#each recentStops as stop, i}
		<button class="recent-stop-button" on:click={clickRecentStop(stop.busStopCode)}>{stop.busStopName}</button>
	{/each}
	<button class="recent-stop-clear-button" on:click={clearRecentStops}>Clear</button>
</div>
{:else}{/if}
