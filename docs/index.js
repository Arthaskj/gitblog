// import config from './config.js'
//
// const ajax = (option) => {
//   var request = new XMLHttpRequest();
//   let url = config.ajaxUrl + option.url
//   request.open(option.type || 'GET', url + option.url, option.async === undefined ? true : false)
//   if (option.type === 'POST') {
//     // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   }
//   request.onload = function() {if (this.status >= 200 && this.status < 400) {option.success(JSON.parse(this.response))}}
//   request.onerror = function() {option.error(JSON.parse(this.response))}
//   request.send(option.data || null)
// }
//
// // ajax({
// //   type: 'GET',
// //   url: "/api/AboutContronller/GetContent",
// //   success(res) {
// //     console.log(res);
// //   }
// // })
// let s = window.location.host + ',' + new Date().toLocaleString().replace(/\s/g, '').replace(/\//g, '-');
// ajax({
//   type: 'GET',
//   url: "/api/SysContronller/SetPageViews?url=" + s,
//   async: false,
//   success(res) {
//     ajax({
//       type: 'GET',
//       url: "/api/SysContronller/GetPageViews",
//       async: false,
//       success(res) {
//         window.pageViews = res && res.length || '0'
//         console.log(res);
//       }
//     })
//   }
// })