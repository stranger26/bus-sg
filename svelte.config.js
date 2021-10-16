/** @type {import('@sveltejs/kit').Config} */
import importAssets from 'svelte-preprocess-import-assets'
import vercel from '@sveltejs/adapter-vercel';

const config = {
	extensions: ['.svelte', '.svlt'],
	preprocess: [importAssets()],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		files: {
			serviceWorker: 'src/service-worker'
		},
		serviceWorker: {
			files: (filepath) => !/\.DS_STORE/.test(filepath)
		}
	}
};

export default config;
