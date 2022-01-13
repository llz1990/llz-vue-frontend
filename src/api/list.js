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

export function getPicDetail(params) {
  return request({
    url:`api/getPicDetail?listId=${params.listId}`,
    method: 'get'
  })
}

// 指定相册合集添加相片
export function addPicDetail(params) {
  return request({
    url:'api/addPicDetail',
    method: 'post',
    data: params
  })
}