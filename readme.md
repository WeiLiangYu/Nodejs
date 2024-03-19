練習於 Restful API 的簡易架設。<br>
練習文章參考為: <br>
    https://ithelp.ithome.com.tw/users/20107247/ironman/1312


尚須架設部分:<br>
使用 PyTorch 模型於 Node.js，方法發想為以下: <br>
1. 使用 onnxjs 部屬yolo訓練的.onnx檔案<br>
    GitHub文章: https://github.com/microsoft/onnxjs
2. 使用 "child_process" 與 yolo 的 python 原生檔溝通。<br>
    參考部分: https://github.com/jaydenhinrichsen/node-opencv-yolo/tree/master
