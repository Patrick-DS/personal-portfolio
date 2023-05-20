const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = ({ config }) => {
	config.resolve.fallback = {
		...config.resolve.fallback,
		fs: false,
		path: false,
		crypto: false,
	}

	config.plugins = [...config.plugins, new NodePolyfillPlugin()]

	return config
}
