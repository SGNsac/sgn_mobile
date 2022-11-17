import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.101.18:8000/'
})

export default api
