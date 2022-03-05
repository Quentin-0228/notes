const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.get("/form", (req, res) => {
  res.send({
    status: 0,
    message: "获取信息成功",
    data: req.query,
  });
});

app.post("/checkname", (req, res) => {
  const body = req.body;
  let message = "";
  if (body.uname === "admin") {
    message = "用户名已经存在，请更换一个";
  } else {
    message = "用户名可以使用";
  }

  res.send({
    status: 0,
    message: message,
  });
});

let book = [
  {
    id: 1,
    name: "三国演义",
    date: "",
  },
  {
    id: 2,
    name: "水浒传",
    date: "",
  },
  {
    id: 3,
    name: "红楼梦",
    date: "",
  },
  {
    id: 4,
    name: "西游记",
    date: "",
  },
  {
    id: 5,
    name: "夏洛特",
    date: "",
  },
];
app.get("/getbooks", (req, res) => {
  res.send({
    status: 0,
    message: "获取成功",
    data: book,
  });
});

app.get("/deleteBook", (req, res) => {
  const id = req.query.id;
  book = book.filter(function (item) {
    return item.id != id;
  });
  res.send({
    status: 0,
    message: "删除成功",
    data: book,
  });
});
app.listen(80);
console.log("http://127.0.0.1");
