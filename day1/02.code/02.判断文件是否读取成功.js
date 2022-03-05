// const fs = require('fs')

// fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！' + err.message)
//     }
//     console.log('读取文件成功！' + dataStr)
// })


const fs = require('fs')
fs.readFile('./files/1.txt', 'utf8', (err, dataStr) => { // 提倡使用 箭头函数
    if (err) return console.log("读取文件失败" + err.message);
    console.log("读取文件成功" + dataStr);
});

const fs = require('fs');
fs.readfile('./files/1.txt', 'utf8')