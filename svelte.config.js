/** @type {import('@sveltejs/kit').Config} */
import importAssets from 'svelte-preprocess-import-assets'
import vercel from '@sveltejs/adapter-auto';
import path from 'path'

const config = {
	extensions: ['.svelte', '.svlt'],
	preprocess: [importAssets()],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			serviceWorker: 'src/service-worker'
		},
		serviceWorker: {
			files: (filepath) => !/\.DS_STORE/.test(filepath)
		},
		vite: {
            resolve: {
                alias: {
                    // these are the aliases and paths to them
                    $routes: path.resolve('./src/routes')
                }
            }
        }
	}
};

export default config;
