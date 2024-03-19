/* config.js */
import Joi from 'joi'; // 正規化、驗證env各個參數是否正確
require('dotenv').config();

// 建立 joi 驗證規則
const envVarSchema = Joi.object().keys({
    // 預設環境為 development，只允許輸入 'development' 或 'production'
    NODE_ENV: Joi.string().default('development').allow('development', 'production'),
    PORT: Joi.number().default(8080),
    VERSION: Joi.string()
}).unknown().required();
// .unknown()  表示允許物件中存在未定義的鍵。
// .required() 表示整个对象是必需的，不能是空对象。

// 使用Joi的validate()函數驗證規則
// process.env: 取出.env檔案
// 驗證為誤時，將錯誤訊息存至error
const { error, value: envVars } = envVarSchema.validate(process.env);
// error存在時列出訊息
if (error){
    throw new Error(`Config validation error: ${error.message}`);
};

const config = {
    version: envVars.VERSION,
    env: envVars.NODE_ENV,
    port: envVars.PORT
};

export default config;