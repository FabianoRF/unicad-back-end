import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Delivery } from '../entities/Delivery';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/database.sql',
  entities: [Delivery],
  synchronize: true,
  logging: false,
});
