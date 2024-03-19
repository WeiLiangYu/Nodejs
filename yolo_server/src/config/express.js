/* express.js */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import config from './config.js';
import index from '../server/routes/index.route.js';

const app = express();
const parentDirectory = path.resolve(__dirname, '..');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(parentDirectory, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

/* Get Home Page */
app.get('/', (req, res) => {
    res.render(`index.html`)
});

app.use('/upload', index);

export default app;