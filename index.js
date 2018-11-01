import Vue  from 'vue';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3006';
//添加请求拦截器 
axios.interceptors.response.use((res)=>{
    // 在这里统一拦截结果，把结果处理成res.data
     return res.data;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//返回的是一个promise 
//获取轮播图 
export let getSlider = ()=>{
	 return axios.get('/slider')
}

//获取热门商品
export let getHot = ()=>{
	 return axios.get('/hot')
}
export let getAll = ()=>{
	 return axios.get('/alllist')
}
//查询每个商品的接口
export let getOne = (id)=>{
	 return axios.get(`/alllist?id=${id}`)
}


