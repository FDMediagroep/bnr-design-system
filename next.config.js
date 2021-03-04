const rewriteConfig = require('./rewrites');

const serverless = {};

if (process.env.SERVERLESS) {
    console.log('Serverless target');
    serverless.target = 'serverless';
}

module.exports = {
    ...serverless,
    // future: { webpack5: true },
    images: {
        domains: [
            'dev.bnr.nl',
            'acc.bnr.nl',
            'bnr.nl',
            'bnr-external-development.imgix.net',
            'bnr-external-acc.imgix.net',
            'bnr-external-prod.imgix.net',
            'www.omnycontent.com',
            'cdn.sanity.io',
        ],
    },
    async rewrites() {
        return [...rewriteConfig];
    },
    webpack: (config, options) => {
        // Markdown
        config.module.rules.push({
            test: /\.md$/,
            use: ['raw-loader'],
        });

        // SVG
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                'raw-loader',
                {
                    loader: 'svgo-loader',
                    options: {
                        plugins: [
                            // { cleanupAttrs: false },
                            // { inlineStyles: false },
                            // { convertColors: { shorthex: false } },
                            // { convertEllipseToCircle: false },
                            // { convertPathData: false },
                            // { convertShapeToPath: false },
                            // { convertTransform: false },
                            // { convertStyleToAttrs: false },
                            // { mergePaths: false },
                            // { removeDoctype: false },
                            // { removeEditorsNSData: false },
                            // { removeEmptyContainers: false },
                            // { removeHiddenElems: false },
                            // { removeMetadata: false },
                            // { removeUselessDefs: false },
                            { removeViewBox: false },
                            // { removeXMLNS: false },
                            // { removeXMLProcInst: false },
                            // { reusePaths: false },
                        ],
                    },
                },
            ],
        });

        /**
         * Add custom polyfills if needed.
         */
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();

            if (
                entries['main.js'] &&
                !entries['main.js'].includes('./client/polyfills.js')
            ) {
                entries['main.js'].unshift('./client/polyfills.js');
            }

            return entries;
        };

        /**
         * This config replaces React with PreactX (3KB gzipped).
         * PreactX should be a 100% drop-in replacement for React.
         * If PreactX is causing problems we can just turn this config off.
         */
        // config.resolve.alias = Object.assign({}, config.resolve.alias, {
        //     react: 'preact/compat',
        //     react$: 'preact/compat',
        //     'react-dom': 'preact/compat',
        //     'react-dom$': 'preact/compat',
        // });

        /**
         * Generate webpack bundle report.
         */
        if (process.env.WEBPACK_BUNDLE_ANALYZER == 'true') {
            const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    reportFilename: options.isServer
                        ? '../../analyzer/server.html'
                        : '../analyzer/client.html',
                    openAnalyzer: false,
                })
            );
        }

        return config;
    },
};
