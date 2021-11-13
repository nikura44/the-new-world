// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 8071,
        open: true, //配置自动启动浏览器 
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}