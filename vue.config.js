module.exports = {
    publicPath:'/',
    outputDir:'myboot-front',
    css:{
        loaderOptions: {
            less:{
                modifyVars: {

                },
                javascriptEnabled:true
            }
        }
    },
    lintOnSave:process.env.NODE_ENV !== 'development',
    productionSourceMap:false,
    devServer: {
        host:'0.0.0.0',
        port:'8088',
        open:true,
        proxy: {
            '/api':{
                target:process.env.VUE_APP_HOST,
                ws:false,
                changeOrigin:true,
                pathRewrite:{'^/api':''}
            }
        }
    },
    // 打包去除console.log
    configureWebpack:(config) => {
        if(process.env.NODE_ENV == 'production') {
            config.optimization.minimizer[0]
            .options.terserOptions.compress.drop_console = true
        }
    }
}