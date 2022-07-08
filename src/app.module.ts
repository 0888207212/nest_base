import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hoanganh1999zzz',
      database: 'auth_nest',
      autoLoadEntities:true,
      // logging:'all',
      synchronize: true,
    }),
      UsersModule,
      AuthModule,
      BlogsModule,
      RoomsModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
