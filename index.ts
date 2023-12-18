import config from './config/index';
import app from './app';

const { PORT } = config;

app.listen(PORT, function () {
    console.log('========================================================');
    console.log(`==> API server is now listening on port ${PORT}`);
    console.log(`==> Swagger is now listening on port ${PORT}`);
    console.log('========================================================');
});