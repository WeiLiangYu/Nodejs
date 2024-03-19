/* yolo.js yolo v8 處理圖片並裁切並OCR */
// const config = require('../../config/config.js');
import path from 'path';
// import { Tensor, InferenceSession } from "onnxjs";
require('onnxjs');
// require('onnxjs-node');

const fs = require('fs');
const fetch = require('cross-fetch');// 模擬 Fetch API ，來加載ONNX.js 模型
global.fetch = fetch;
const {createCanvas, loadImage} = require('canvas');
global.fetch = fetch;
const template = {
    1: "UNIT",
    2: "HEAT",
    3: "PROTEIN",
    4: "TOTALFAT",
    5: "SATFAT",
    6: "TRANSFAT",
    7: "CARBOHYDRATE",
    8: "SUGAR",
    9: "SODIUM",
    0: "G_ML_NUM"
}

// 圖片前處理
async function Preprocessing(imgPath){
    // let imgPath = path.join(uploadFolder, fileName);

    // 讀取圖片，且壓縮為 640x640
    let img = await loadImage(imgPath);
    let canvas = createCanvas(640, 640) // 創建 (640, 640) 畫布
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, 640, 640); // (起始x, 起始y, 終點x, 終點y)

    // 保存壓縮圖片
    let buffer = canvas.toBuffer('image/jpeg'); // 轉為二進位數據
    fs.writeFileSync(imgPath, buffer); // 儲存圖片
    console.log('圖片壓縮完成。');
    return imgPath;
};

// Yolo 抓取圖片
async function yoloPredict(imgPath){
    // const session = new onnx.InferenceSession({ backendHint: 'onnxruntime' });
    // await session.loadModel("../models/add.onnx");
    // let modelPath = path.resolve(__dirname, '../models/yolov8Model.onnx');
    // modelPath = new URL(`file://${modelPath}`).href;
    // console.log(modelPath);
    // // let modelData = fs.readFileSync(modelPath);
    // let session = new InferenceSession();
    // await session.loadModel('C:\Users\innocence846\Desktop\code\nodejs\yolo_server\models');
    // 載入圖片
    // let imageBuffer = fs.readFileSync(imgPath);
    // let tensor = new Tensor(new Float32Array(imageBuffer), 'float32', [1, 640, 640, 3]);
    // let outputMap = await session.run([tensor]);
    // console.log(outputMap.values().next().value);
    // return session;
};


export default { Preprocessing, yoloPredict };