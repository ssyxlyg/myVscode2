/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-11 15:20:57
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-12 10:40:57
 * @FilePath: \vsFile\mymi\vue.config.js
  */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        //代理
        proxy: {
            "/member": {
                //把请求的域名替换为target对应域名，服务器端去请求数据
                target: "https://www.520mg.com",
                changeOrigin: true  //允许跨域
            }
        }
    }
})
