import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('API Documentation') // Set the title of the API
    .setDescription('API documentation for your backend') // Description of your API
    .setVersion('1.0') // API version
    .addBearerAuth() // Optional: if your API uses Bearer tokens (JWT authentication)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // You can change the path to whatever you prefer (e.g., '/docs')

  await app.listen(3000);
}

bootstrap();
