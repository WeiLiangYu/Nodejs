const express = require("express");
const router = express.Router();

// 路由設定. API設計
router.get("/", (req, res)=>{
    res.send("我是 /book 的根路徑");
});
router.get("/page", (req, res)=>{
    res.json({"message": "我是 /books/page 的路徑"});
});

// 將router導出，使別的程式可以require導入使用
module.exports = router;