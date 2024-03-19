const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("我是 /about 的 router.");
});

// .query.[參數] 支援URL帶參數功能
// /about/testq?name=Hi
router.get("/testq", (req, res)=>{
    let name = req.query.name;
    res.send(`我是 /about/testq，您的名子是${name}`)
})

module.exports = router;