module.exports = {
	devServer: {
		proxy: {
			'/api': {
				// target: 'http://localhost:8080/api',
				target: 'https://jskimweb-jsboard.du.r.appspot.com/api',
				changeOrigin: true,
				pathRewrite: { "^/api": '' }
			}
		}
	},
	outputDir: '../backend/public',
} 