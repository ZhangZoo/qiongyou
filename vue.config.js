let path = require("path")
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        styles: path.resolve(__dirname, './src/assets/styles'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils'),
        mixins: path.resolve(__dirname, './src/mixins'),
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    proxy: {
      '/biu_list': {
        target: 'https://m.qyer.com/home/api/biu_list',
        changeOrigin: true,
      },
      '/dianying': {
        target: 'http://m.maoyan.com/',
        changeOrigin: true,
      },
      '/search':{
        target:"https://m.qyer.com/qcross/hotel/api/city/search",
        changeOrigin:true,
        pathRewrite:{
          "^/search":""
        }
      },
      '/list':{
        target:"https://m.qyer.com/qcross/hotel/api/hotel/list",
        changeOrigin:true,
        pathRewrite:{
          "^/list":""
        }
      },
      '/ajaxsearch':{
        target:"https://m.qyer.com/ajax.php",
        changeOrigin:true,
        pathRewrite:{
          "^/ajaxsearch":""
        }
      },
      '/imgInfo':{
        target:"https://biu.qyer.com/p/recommends/",
        changeOrigin:true,
        pathRewrite:{
          "^/imgInfo":""
        }
      },
      '/buiban':{
        target:"https://m.qyer.com/feeds/biuban/list.json",
        changeOrigin:true,
        pathRewrite:{
          "^/buiban":""
        }
      },

      
    }
  }
}