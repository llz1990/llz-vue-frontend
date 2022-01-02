import request from '@/utils/axios'

export function getAllPicList() {
  return request({
    url:'api/picList',
    method: 'get'
  })
}

// 添加相册
export function addPic(params) {
  return request({
    url:'api/addPic',
    method: 'post',
    data: params
  })
}

// 编辑相册
export function editPic(params) {
  return request({
    url:'api/editPic',
    method: 'post',
    data: params
  })
}

// 删除相册
export function deletePic(params) {
  return request({
    url:'api/deletePic',
    method: 'delete',
    data: params
  })
}