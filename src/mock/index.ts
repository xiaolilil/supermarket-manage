import { MockMethod } from 'vite-plugin-mock'

// 引入mockjs
import Mock from "mockjs";

// 获取 mock.Random 对象
const Random = Mock.Random


// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
})  

let configArray = [];



// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.ts$/);
files.keys().forEach((key) => {
  if (key === './index.js') return;
  configArray = configArray.concat(files(key).default);
});
 
// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|');
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
  }
});










// export default [
//   {
//     url: '/api/getNewsList',
//     method: 'get',
//     response: () => {
//       return {
//           code: 0,
//           message: 'success',
//           data: [
//           	{
//           		title: '标题111',
//           		content: '内容1111'
//           	},
//           	{
//           		title: '标题222',
//           		content: '内容2222'
//           	}
//           ]
//       }
//     }
//   },
//   // more...
// ] as MockMethod[]
