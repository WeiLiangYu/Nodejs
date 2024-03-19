/* express.js */
import express from 'express';
import bodyParser from 'body-parser'; // Middleware 中介軟體
import cors from 'cors'; // 存取跨域/port資源
import morgan from 'morgan'; // 狀態馬顯示

import config from './config.js';
import index from '../server/routes/index.route.js';

const app = express();

app.use(bodyParser.json()); // 解析 Json 的請求
app.use(bodyParser.urlencoded({ extended: true }));  // 解析以 URL 編碼的請求
app.use(cors()); 
app.use(morgan('dev'));

/* Get home page.*/
app.get('/', (req, res) => {
    res.send(`Server Run on ${config.port} prot: http://localhost:${config.port}`);
});
app.use('/api', index);

export default app;