module.exports = {
    publicPath: '/movie-app',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}