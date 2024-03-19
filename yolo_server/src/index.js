import config from './config/config.js';
import app from './config/express.js';

app.listen(config.port, () => {
    console.log(`Server Run On ${config.port}: ${config.server_url}:${config.port}`);
})

export default app;