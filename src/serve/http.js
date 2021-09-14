import axios from 'axios'
import {
  Message
} from 'element-ui'
if (process.env.NODE_ENV === 'production') {
  var baseUrl = 'https://api.aolincode.com/api/activities'
} else {
  var baseUrl = 'https://api-test.aolincode.com/api/activities'
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: baseUrl,
  timeout: 15000 // 请求超时时间
});

export default service
