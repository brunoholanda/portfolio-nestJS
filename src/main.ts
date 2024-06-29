import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.enableCors(); // Adicione esta linha para habilitar CORS

  await app.listen(4000, () => {
    const server = app.getHttpServer();
    const router = server._events.request._router;
    const availableRoutes = router.stack
      .filter((r) => r.route)
      .map((r) => {
        return {
          method: r.route.stack[0].method.toUpperCase(),
          path: r.route.path,
        };
      });
    logger.log(`Available Routes: ${JSON.stringify(availableRoutes, null, 2)}`);
  });
}
bootstrap();
