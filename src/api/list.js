import request from '@/utils/axios'

export function getAllPicList() {
  return request({
    url:'api/picList',
    method: 'get'
  })
}

export function addPic(params) {
  return request({
    url:'api/addPic',
    method: 'post',
    data: params
  })
}

export function deletePic(params) {
  return request({
    url:'api/deletePic',
    method: 'delete',
    data: params
  })
}