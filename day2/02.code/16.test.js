// // 导入自定义的格式化时间的模块
// const TIME = require('./15.dateFormat')

// // 调用方法，进行时间的格式化
// const dt = new Date()
//     // console.log(dt)
// const newDT = TIME.dateFormat(dt)
// console.log(newDT)

//————————  方法2 ————————————————————————————————
// “ 结构函数 ”   ** 重点 工作中常用
const { username, dateFormat } = require("./15.dateFormat");
const dt = new Date();
console.log(dateFormat(dt));
// console.log(username);