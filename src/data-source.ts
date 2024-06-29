import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'cc391618',
  database: 'portfolio',
  entities: [User, Post],
  migrations: ['src/migration/*.ts'],
  synchronize: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
