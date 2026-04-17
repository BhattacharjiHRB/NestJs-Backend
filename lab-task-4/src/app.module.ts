import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hrittik',
      password: 'admin12',
      database: 'products_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
