/*
 * @Author: your name
 * @Date: 2020-10-23 14:14:03
 * @LastEditTime: 2021-01-29 10:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data_governance\src\axios\dataQuality.js
 */
import { get, post, put, deletefn } from "./axios";


const base = {
    find: `/find`,
}
export const baseApi={
    Find:function Find(params) {
        return post(base.find, params);
    },
}
// 应用
// import {baseApi} from '@axios/api.js';
// baseApi.Find(data).then((res)=>{
//     if (res.status == 200) {
        
//     }
// })