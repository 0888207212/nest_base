import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { RoomsRepository } from './repositoris/room.repositiry';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomsRepository])
  ],
  controllers: [RoomsController],
  providers: [RoomsService],
  exports: [RoomsService],
})
export class RoomsModule { }
