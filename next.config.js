const path = require('path');
const webpack = require('webpack');

const withAntdLess = require('next-plugin-antd-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

const loadEnvConfig = require('./bin/env');

loadEnvConfig();

const antdVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/styles/variables.less'), 'utf8'));

module.exports = withBundleAnalyzer(
	withAntdLess({
		lessVarsFilePath: './src/styles/variables.less',
		lessVarsFilePathAppendToEndOfContent: true,
		cssLoaderOptions: {
			modules: {
				localIdentName: process.env.NODE_ENV !== 'production' ? '[folder]__[local]__[hash:4]' : '[hash:8]',
			},
		},

		// Other Config Here...
		async rewrites() {
			return [
				// Rewrite everything else to use `pages/index`
				{
					source: '/app/:path*',
					destination: '/app/',
				},
			];
		},

		webpack(config) {
			config.module.rules.push({
				test: /\.md$/,
				use: 'frontmatter-markdown-loader',
			});
			// Configuration for svg
			config.module.rules.push(
				{
					type: 'asset',
					resourceQuery: /url/, // *.svg?url
				},
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ['@svgr/webpack'],
				}
			);

			config.plugins.push(new webpack.EnvironmentPlugin({ ...process.env, THEME: { ...antdVariables } }));

			return config;
		},
	})
);
