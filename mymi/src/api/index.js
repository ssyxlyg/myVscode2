/*
 * @Author: ssyx ssyx@gmail.com
 * @Date: 2022-10-17 09:43:02
 * @LastEditors: ssyx ssyx@gmail.com
 * @LastEditTime: 2022-10-18 10:44:18
 * @FilePath: \vsFile\mymi\src\api\index.js
  */
import qs from 'qs';
import request from '../utils/request.js'


function GetHomeData (data, config) {
    return new Promise((resolve, reject) => {
        request.post('v1/home/page', qs.stringify(data)).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}
function GetCatData (data, config) {
    return new Promise((resolve, reject) => {
        request.post('v1/home/category_v2', qs.stringify(data)).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}
export { GetHomeData, GetCatData }