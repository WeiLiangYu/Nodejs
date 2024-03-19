/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* config.js */\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default().object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('development').allow('development', 'production'),\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default().number().default(8080),\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('1.0.0'),\n  VIEWS_PATH: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('/server/views'),\n  SERVER_URL: joi__WEBPACK_IMPORTED_MODULE_0___default().string().default('http://127.0.0.1')\n}).unknown().required();\nconst {\n  error,\n  value: envVars\n} = envVarSchema.validate(process.env);\nif (error) {\n  throw new Error(`Config validation error: ${error.message}`);\n}\n;\nconst config = {\n  env: envVars.NODE_ENV,\n  port: envVars.PORT,\n  version: envVars.version,\n  views_path: envVars.VIEWS_PATH,\n  server_url: envVars.SERVER_URL\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://yolo_server/./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.js */ \"./src/config/config.js\");\n/* harmony import */ var _server_routes_index_route_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/routes/index.route.js */ \"./src/server/routes/index.route.js\");\n/* express.js */\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst parentDirectory = path__WEBPACK_IMPORTED_MODULE_4___default().resolve(__dirname, '..');\napp.engine('html', (__webpack_require__(/*! ejs */ \"ejs\").renderFile));\napp.set('view engine', 'html');\napp.set('views', path__WEBPACK_IMPORTED_MODULE_4___default().join(parentDirectory, 'views'));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('dev'));\n\n/* Get Home Page */\napp.get('/', (req, res) => {\n  res.render(`index.html`);\n});\napp.use('/upload', _server_routes_index_route_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://yolo_server/./src/config/express.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config.js */ \"./src/config/config.js\");\n/* harmony import */ var _config_express_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express.js */ \"./src/config/express.js\");\n\n\n_config_express_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n  console.log(`Server Run On ${_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}: ${_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].server_url}:${_config_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_config_express_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://yolo_server/./src/index.js?");

/***/ }),

/***/ "./src/server/modules/yolo.js":
/*!************************************!*\
  !*** ./src/server/modules/yolo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* yolo.js yolo v8 處理圖片並裁切並OCR */\n// const config = require('../../config/config.js');\n\n// import { Tensor, InferenceSession } from \"onnxjs\";\n__webpack_require__(/*! onnxjs */ \"onnxjs\");\n// require('onnxjs-node');\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst fetch = __webpack_require__(/*! cross-fetch */ \"cross-fetch\"); // 模擬 Fetch API ，來加載ONNX.js 模型\nglobal.fetch = fetch;\nconst {\n  createCanvas,\n  loadImage\n} = __webpack_require__(/*! canvas */ \"canvas\");\nglobal.fetch = fetch;\nconst template = {\n  1: \"UNIT\",\n  2: \"HEAT\",\n  3: \"PROTEIN\",\n  4: \"TOTALFAT\",\n  5: \"SATFAT\",\n  6: \"TRANSFAT\",\n  7: \"CARBOHYDRATE\",\n  8: \"SUGAR\",\n  9: \"SODIUM\",\n  0: \"G_ML_NUM\"\n};\n\n// 圖片前處理\nasync function Preprocessing(imgPath) {\n  // let imgPath = path.join(uploadFolder, fileName);\n\n  // 讀取圖片，且壓縮為 640x640\n  let img = await loadImage(imgPath);\n  let canvas = createCanvas(640, 640); // 創建 (640, 640) 畫布\n  let ctx = canvas.getContext('2d');\n  ctx.drawImage(img, 0, 0, 640, 640); // (起始x, 起始y, 終點x, 終點y)\n\n  // 保存壓縮圖片\n  let buffer = canvas.toBuffer('image/jpeg'); // 轉為二進位數據\n  fs.writeFileSync(imgPath, buffer); // 儲存圖片\n  console.log('圖片壓縮完成。');\n  return imgPath;\n}\n;\n\n// Yolo 抓取圖片\nasync function yoloPredict(imgPath) {\n  const session = new onnx.InferenceSession({\n    backendHint: 'onnxruntime'\n  });\n  await session.loadModel(\"../models/add.onnx\");\n  // let modelPath = path.resolve(__dirname, '../models/yolov8Model.onnx');\n  // modelPath = new URL(`file://${modelPath}`).href;\n  // console.log(modelPath);\n  // // let modelData = fs.readFileSync(modelPath);\n  // let session = new InferenceSession();\n  // await session.loadModel('C:\\Users\\innocence846\\Desktop\\code\\nodejs\\yolo_server\\models');\n  // 載入圖片\n  // let imageBuffer = fs.readFileSync(imgPath);\n  // let tensor = new Tensor(new Float32Array(imageBuffer), 'float32', [1, 640, 640, 3]);\n  // let outputMap = await session.run([tensor]);\n  // console.log(outputMap.values().next().value);\n  // return session;\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Preprocessing,\n  yoloPredict\n});\n\n//# sourceURL=webpack://yolo_server/./src/server/modules/yolo.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_yolo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/yolo.js */ \"./src/server/modules/yolo.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* 管理所有 routes */\n\n\n// import config from '../../config/config.js';\n // 處理文件上傳\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n// 設定圖片儲存選項\nconst storage = multer__WEBPACK_IMPORTED_MODULE_2___default().diskStorage({\n  destination: './public/img/',\n  filename: function (req, file, cb) {\n    // cb 回調函數 (錯誤對象, 返回值)\n    cb(null, file.originalname.replace(/[<>:\"/\\\\|?*]/g, \"_\")); // 特殊符號時，替換文件檔名，確保安全\n  }\n});\n// 儲存圖片\nconst uploadFolder = multer__WEBPACK_IMPORTED_MODULE_2___default()({\n  storage: storage,\n  fileFilter: function (req, file, cb) {\n    if (file.mimetype.startsWith('image/')) {\n      cb(null, true);\n    } else {\n      cb(new Error('只能上傳圖片!'));\n    }\n  }\n});\nrouter.post('/', uploadFolder.single('file'), (req, res) => {\n  const file = req.file;\n  if (file && file.mimetype.startsWith('image/')) {\n    console.log(file);\n    let imgPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(file.destination, file.filename);\n    console.log(imgPath);\n    _modules_yolo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Preprocessing(imgPath);\n    _modules_yolo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].yoloPredict(imgPath);\n    res.send(`上傳成功`);\n  } else {\n    res.status(400).send('Not Image');\n  }\n});\nrouter.use(function (err, req, res, next) {\n  if (err instanceof (multer__WEBPACK_IMPORTED_MODULE_2___default().MulterError)) {\n    // 如果是 Multer 錯誤，回傳 Multer 錯誤訊息\n    res.status(400).send('上傳錯誤：' + err.message);\n  } else {\n    // 否則返回其他錯誤訊息\n    res.status(400).send(err.message);\n  }\n});\nrouter.get('/', (req, res) => {\n  res.send(`測試`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://yolo_server/./src/server/routes/index.route.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "canvas":
/*!*************************!*\
  !*** external "canvas" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("canvas");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("ejs");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "onnxjs":
/*!*************************!*\
  !*** external "onnxjs" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("onnxjs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;