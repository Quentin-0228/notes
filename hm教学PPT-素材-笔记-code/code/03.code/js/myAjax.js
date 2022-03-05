const $ = {
  //专门处理数据对象转key=value
  resolveData: function (obj) {
    //对象转key=value
    if (obj && typeof obj === "object") {
      let arr = [];
      for (let key in obj) {
        let str = key + "=" + obj[key];
        arr.push(str);
      }
      return arr.join("&");
    }
  },
  ajax: function (options) {
    let type = options.type || "GET"; //请求方式
    let url = options.url || location.href; //请求地址
    let data = this.resolveData(options.data) || ""; //参数
    let success = options.success; //回调函数
    //1.创建xhr对象
    let xhr = new XMLHttpRequest();
    //如果你是get请求
    if (type.toUpperCase() === "GET") {
      url = url + "?" + data;
      data = null;
    }
    //2.设置open
    xhr.open(type, url);
    //如果你是post请求
    if (type.toUpperCase() === "POST") {
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    //3.调用send
    xhr.send(data);
    //4.设置监听
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //将字符串转为json对象
        let res = JSON.parse(xhr.responseText);
        //将数据暴露出去
        success && success(res);
      }
    };
  },
};
