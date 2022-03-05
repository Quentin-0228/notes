const fs = require("fs");
// 1. 读取 文件
fs.readFile("./成绩.txt", "utf8", (err, dataStr) => { // 这里的错误 易写错成 err.dataStr
    if (err) return console.log("读取文件失败" + err.message);

    // console.log(dataStr);

    // 2. 把字符串转换 为 数组
    const arrold = dataStr.split(" ");
    const arrNew = [];

    // 3. 循环遍历数组中的数据  进行格式转换
    arrold.forEach((item) => {
        arrNew.push(item.replace("=", ": "));

    });
    // 4. 把最新的数据进行换行 \r\n
    const str = arrNew.join("\r\n");
    console.log(str);

    // 5.将最新数据写入到本地
    fs.writeFile("./files/成绩OK.txt", str, (err) => {
        if (err) return console.log("写入失败" + err.message);
        console.log("写入成功!");
    });
})