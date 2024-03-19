import config from './config/config.js';
import app from './config/express.js';

app.listen(config.port, () => {
    console.log(`server run on ${config.port}: http://127.0.0.1:${config.port}`);
});

export default app;