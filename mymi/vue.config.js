/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-11 15:20:57
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-17 17:31:08
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
                changeOrigin: true //允许跨域
            },
            "/v1": {
                //把请求的域名替换为target对应域名，服务器端去请求数据
                target: "https://m.mi.com",
                changeOrigin: true, //允许跨域
                onProxyReq (proxyReq, req, res) {
                    // 小米会检测请求头Refer是否包含，采用欺骗手段
                    proxyReq.setHeader('Referer', 'https://m.mi.com/')
                },
            },
            "/v3": {
                //把请求的域名替换为target对应域名，服务器端去请求数据
                target: "https://api.zdoodoo.com",
                changeOrigin: true, //允许跨域
                onProxyReq (proxyReq, req, res) {
                    // 小米会检测请求头Refer是否包含，采用欺骗手段
                    proxyReq.setHeader('Device-Id', "fa688c6c-4d7c-4fb6-8828-493f320dc795:")
                },
            }
        }
    }
})
