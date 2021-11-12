// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        open: true,
        proxy: {
            ['^/']: {
                target: 'http://localhost:8080',
                changeOrign: true,
                ws: true
            }
        }
    }
}