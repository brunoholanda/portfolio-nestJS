import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { LeadsModule } from './leads/leads.module';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { Lead } from './leads/lead.entity'; // Importar a entidade Lead

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'cc391618',
      database: 'portfolio',
      entities: [User, Post, Lead], // Incluir a entidade Lead
      synchronize: false,
    }),
    AuthModule,
    UsersModule,
    PostsModule,
    LeadsModule,
  ],
})
export class AppModule {}
