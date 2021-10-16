/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svlt'],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
