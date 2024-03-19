/* 管理所有 routes */
import express from 'express';
import yolo from '../modules/yolo.js';
// import config from '../../config/config.js';
import multer from 'multer'; // 處理文件上傳
import path from 'path';

const router = express.Router();
// 設定圖片儲存選項
const storage = multer.diskStorage({
    destination: './public/img/',
    filename: function (req, file, cb) { // cb 回調函數 (錯誤對象, 返回值)
        cb(null, file.originalname.replace(/[<>:"/\\|?*]/g, "_"));  // 特殊符號時，替換文件檔名，確保安全
    } 
});
// 儲存圖片
const uploadFolder = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('只能上傳圖片!'));
        }
    }
});
router.post('/', uploadFolder.single('file'), (req, res) => {
    const file = req.file;
    if (file && file.mimetype.startsWith('image/')){
        console.log(file);
        let imgPath = path.join(file.destination, file.filename);
        console.log(imgPath);
        yolo.Preprocessing(imgPath);
        // yolo.yoloPredict(imgPath); // 導入 onnxjs 失敗
        res.send(`上傳成功`);
    } else {
        res.status(400).send('Not Image');
    }
});
router.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) {
        // 如果是 Multer 錯誤，回傳 Multer 錯誤訊息
        res.status(400).send('上傳錯誤：' + err.message);
    } else {
        // 否則返回其他錯誤訊息
        res.status(400).send(err.message);
    }
});

router.get('/', (req, res) => {
    res.send(`測試`);
});

export default router;