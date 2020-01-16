import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;// 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';// 配置请求头
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? '' : 'http://106.12.6.104:8080/';// 配置接口地址
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	// 在发送请求之前做某件事
	if(config.method === 'post'){
		// config.data = qs.stringify(config.data);
		if(config.headers['Content-Type'] !== 'application/x-www-form-urlencoded'){
			config.data = qs.stringify(config.data);
		}else{
			config.data = config.data;
		}
	}
	if(config.headers['accessToken'] !== undefined){
		axios.defaults.headers.post['accessToken'] = config.headers['accessToken']
	}
	return config;
},(error) => {
	return Promise.reject(error);
});

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
	// 对响应数据做些事
	if(!res.data.success){
		return Promise.resolve(res);
	}
	return res;
}, (error) => {
	return Promise.reject(error);
});

/**
 * 返回一个Promise(发送post请求)
 * @param url String 请求地址
 * @param params Object 参数，无参输入{}
 * @param headers Object http头，可以不输
 * @returns {Promise<any>}
 */
export function fetchPost(url, params,headers) {
	if(headers !== undefined){
		const { accessToken } = headers;
		axios.defaults.headers.post['accessToken'] = accessToken
	}
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

/**
 * 返回一个Promise(发送GET请求)
 * @param url String 请求地址
 * @param param Object 参数，无参输入{}
 * @param headers Object http头，可以不输
 * @returns {Promise<any>}
 */
export function fetchGet(url, param,headers) {
	if(headers !== undefined){
		const { accessToken } = headers;
		axios.defaults.headers.get['accessToken'] = accessToken
	}
	return new Promise((resolve, reject) => {
		axios.get(url, { params : param })
			.then(response => {
				resolve(response)
			}, err => {
				reject(err)
			})
			.catch((error) => {
				reject(error)
			})
	})
}

/**
 * 发送文件
 * @param url String 请求地址
 * @param files Array 文件列表
 * @returns {Promise<any>}
 */
export function postFile(url,files) {
	let instance = axios.create();
	instance.defaults.timeout = 30000;
	let forms = new FormData()
	for (let i = 0; i < files.length; i++) {
		forms.append('file',files[i].file)
	}
	instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
	return new Promise((resolve, reject) => {
		instance.post(url, forms)
		.then(response => {
			resolve(response);
		}, err => {
			reject(err);
		})
		.catch((error) => {
			reject(error)
		})
	})
}
export default {
	fetchPost,
	fetchGet,
	postFile
}
