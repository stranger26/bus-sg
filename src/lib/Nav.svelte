<script>
	import DarkModeToggle from '$lib/DarkModeToggle.svelte';

	export let section;
</script>

<style>
	#nav-logo {
		max-height: 24px;
	}

	.nav-img {
		height: 24px;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="nav-header">
	<ul>
		<li><a aria-current={section === undefined ? 'page' : undefined} href="/" class="nav-img"><img src="$lib/assets/bus-128.svg" alt="BUS SG" id="nav-logo"></a></li>
		<li><a aria-current={section === "about" ? 'page' : undefined} href="/about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{section === 'api' ? 'page' : undefined}" href="/api">api</a></li>
	</ul>
	<DarkModeToggle />
</nav>
