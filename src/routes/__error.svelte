<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `Error ${status}`,
				msg: `${error.message}`
			}
		};
	}
</script>
<script>
	export let title, msg;
</script>

<style type="text/css">
	.error-msg {
		position: fixed;
		top: 50%;
		left: 50%;
		/* bring your own prefixes */
		transform: translate(-50%, -50%);
	}

	.error-msg > div {
		margin: auto;
		text-align: center;
	}

	.error-msg img {
		max-width: 10vw;
		min-width: 80px;
		margin-bottom: 16px;
		user-select: none;
	}
</style>

<div class="error-msg">
	<div>
		<img src="/assets/error.svg" alt="Error" />
		<h1>{title}</h1>
		<p>{msg}</p>
	</div>
</div>
