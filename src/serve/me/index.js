import http from './../http'

export default{
  getUser(id){
    return http.get(`/getUser?id=${id}`, {})
  },
  getList(param){
    return http.post('/getList',param)
  }
}
