import axios from '../../axios.js'
import router from '@/router'
const baseURL = 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('access_token');
const http = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})

// // Request interceptor
// axios.interceptors.request.use(request => {
//   // const token = store.getters['auth/token'];
//   const token = localStorage.getItem('access_token')

//   if (token) {
//     request.headers.common['Authorization'] = `Bearer ${token}`
//   }

//   // const locale = store.getters['lang/locale']
//   // if (locale) {
//   //     request.headers.common['Accept-Language'] = locale
//   // }

//   // request.headers['X-Socket-Id'] = Echo.socketId()

//   return request
// })

  // axios.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     if (error.response.status == 401) {
  //       // console.log('AXIOS INTERCEPTOR : LOGOUT LOCAL')
  //       store.dispatch('auth/logoutLocally')
  //       router.push({name: 'page-login'})
  //     }

  //     return Promise.reject(error)
  //   }
  // )


export default http
