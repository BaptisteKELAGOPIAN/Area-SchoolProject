"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With',
        exposedHeaders: 'Content-Type, Authorization, X-Requested-With',
    });
    console.log(app);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map