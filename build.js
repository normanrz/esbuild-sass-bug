const esbuild = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');


esbuild.build({
    entryPoints: ['index.js'],
    bundle: true,
    outfile: 'bundle.js',
    loader: {
      '.eot': 'file',
      '.woff': 'file',
      '.woff2': 'file',
      '.svg': 'file',
      '.ttf': 'file',
    },
    plugins: [lessLoader()]
}).catch((e) => console.error(e.message));
