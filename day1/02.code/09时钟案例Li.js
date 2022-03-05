// 创建 2个正则表达式, 分别用来匹配<style> 与 <script> | . 
// 用 fs 模块, 读取需要被处理的HTML文件 | const 
// 自定义resolveCSS / resolveJS / resolveHTML 方法, 来写入 index.css / index.js / index.html 文件

// 读的是素材内容,不是自己写好的 !

//fs.writeFile() 只能用来创建文件,不能用来创建路径 ; 反复调用fs.writeFile() 写入同一个文件,新写入的内容会覆盖之前的旧内容



// 1. 导入所需模块 并创建正则表达式
// 1.1导入  fs 模块
const fs = require('fs');

// 1.2导入 path 
const path = require('path');
// 1.3 、1.4 匹配 <style></style>标签 及 <script></script> 的 正则
// \s表示空白字符 ;  \S表示非空白字符
const regStyle = /<style>[\s\S]*<\/style>/; // 2个 / 表示这是正则表达式  \转义字符 防止冲突
const regScript = /<script>[\s\S]*<\/script>/;

// 2. 用fs模块读取需被处理的html文件
// 2.1 通过调用fs.readFile()方法 读取需被处理的html文件
fs.readFile(path.join(__dirname, "./clock_index.html"), "utf8", function(err, dataStr) {
    // 2.2 读取 HTML文件失败
    if (err) return console.log("读取html文件失败" + err.message);
    // 2.3 读取文件成功后, 调用对应的三个方法,分别拆解出 css , js , html文件
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

// 3 自定义 resolveCSS 方法
// 3.1 定义处理 css样式的方法
function resolveCSS(htmlStr) {
    // 3.2 使用正则 提取需要的内容
    const r1 = regStyle.exec(htmlStr);
    // 3.3 把提取出的 样式字符串,进行字符串的replace替换操作
    con

}


// 4. 自定义 resolveJS 方法

// 5. 自定义 resolveHTML 方法


function save(fname, content) {
    //  写入 index.html这个文件
    // 获取文件后缀名
    const ext = path.extname(fname).substr(1);
    fs.writeFile(path.join(__dirname, "./clock_Li", fname), content, function(err) {

    })
}