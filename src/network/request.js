import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 拦截请求
  instance.interceptors.request.use(config => {return config},err => {console.log(err)})

  // 拦截响应
  instance.interceptors.response.use(
    res => res.data,
    err => {console.log(err);})
  return instance(config)
}
