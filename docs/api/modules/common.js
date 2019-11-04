import request from '../request';
import requestParam from '../requestParam';

// 登录
export function GetContent(params) {
  return request({
    url: '/api/AboutContronller/GetContent',
    method: 'get',
    data: requestParam(params)
  });
}