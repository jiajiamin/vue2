/*
 * @Author: your name
 * @Date: 2021-01-20 13:25:41
 * @LastEditTime: 2021-01-26 17:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tagLibrary\taglibrary\src\request\axios.js
 */
import axios from 'axios'; // 引入axios
import QS from 'qs';

// 请求拦截器
axios.defaults.baseURL=process.env.NODE_ENV === 'production' ? config.url : '/api';

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json';


/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) { 
    return new Promise((resolve, reject) => {         
        axios.post(url, params)        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/**
 * put 方法
 * url 请求地址
 * params 请求参数
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    instance.put(url, params).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}
export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    instance.delete(url,
      //  params:Object.assign(params,{access_token:TOKEN})
      {
        params
      }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}