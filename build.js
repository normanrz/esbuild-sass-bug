const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['index.js'],
    bundle: true,
    outfile: 'bundle.js',
}).catch((e) => console.error(e.message));
