import request from '../request.js';
import requestParam from '../requestParam.js';

// 登录
export function GetContent(params) {
  return request({
    url: '/api/AboutContronller/GetContent',
    method: 'get',
    data: requestParam(params)
  });
}