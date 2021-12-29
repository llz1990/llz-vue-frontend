import request from '@/utils/axios'

// =================== 此处为 mock 数据接口 =========================
export function login(params) {
  return request({
    url: '/user/login',
    method: 'get',
    data:params
  })
}

export function getUserInfo(params) {
  return request({
    url: '/user/info/get',
    method: 'get',
    data:params
  })
}

export function getUserList(reqData) {
  return request({
    url:'/user/list/get',
    method: 'get',
    data: reqData
  })
}


// =================== 此处为真是数据接口 =========================
export function sysLogin(params) {
  return request({
    url: 'api/login',
    method: 'post',
    data: params
  })
}

export function sysGetUserInfo(params) {
  return request({
    url: 'api/checkToken',
    method: 'post',
    data: params
  })
}

