// 专门定义可以全局使用的过滤器
export function date(value) {
  let date = new Date(value * 1);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

// ES6的导出写法 export function xxx;  导入 import {xxx}
// ES5的导出写法 export  defalut  xxx;  导入 import xxx
