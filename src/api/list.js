import request from '@/utils/axios'

// 查询相册合集
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
    method: 'post',
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


// 查询视频合集
export function getAllVideos() {
  return request({
    url:'api/getVideoList',
    method: 'get'
  })
}

// 添加新的视频文件
export function addVideo(params) {
  return request({
    url:'api/addVideo',
    method: 'post',
    data: params
  })
}

export function addVideoEx(params) {
  return request({
    url:'api/addVideoEx',
    method: 'post',
    data: params
  })
}