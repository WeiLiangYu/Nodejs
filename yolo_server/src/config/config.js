/* config.js */
import Joi from 'joi';
require('dotenv').config();

const envVarSchema = Joi.object().keys({
    NODE_ENV: Joi.string().default('development').allow('development', 'production'),
    PORT: Joi.number().default(8080),
    VERSION: Joi.string().default('1.0.0'),
    VIEWS_PATH: Joi.string().default('/server/views'),
    SERVER_URL: Joi.string().default('http://127.0.0.1')
}).unknown().required();

const {error, value: envVars} = envVarSchema.validate(process.env);

if (error){
    throw new Error(`Config validation error: ${error.message}`);
};

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    version: envVars.version,
    views_path: envVars.VIEWS_PATH,
    server_url: envVars.SERVER_URL
};

export default config;