// 載入 express 的伺服器套件
const express = require("express");
const app = express();
const port = 8088;
// 載入 Router
const bookRouter = require("./routes/books.js")
const aboutRouter = require("./routes/about.js")

app.get("/", (req, res)=>{
    res.send("我是Node.js Server!");
});

app.use("/books", bookRouter); // 將books的路徑導入至books.js處理
app.use("/about", aboutRouter);

app.listen(port, ()=>{
    console.log(`Server is running at localhost ${port}.`);
});