import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomEntity } from './entitys/room.entity';
import { RoomsRepository } from './repositoris/room.repositiry';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomsRepository)
    private readonly roomsRepository: RoomsRepository,
  ) { }

  async getRoom(): Promise<RoomEntity[]> {
    return await this.roomsRepository.find();
  }

  async createRoom(
    body: CreateRoomDto,
    file: any
  ): Promise<RoomEntity> {
    const room = new CreateRoomDto();
    room.roomName = body.roomName;
    room.address = body.address;
    room.img = file.originalname;
    room.price = body.price;
    room.description = body.description;
    console.log(room);
    return await this.roomsRepository.save(room);
  }

  async updateRoom(
    id: string,
    data: UpdateRoomDto,
  ): Promise<any> {
    // const room = new UpdateRoomDto();
    const Data = await this.roomsRepository.update(id, data)
    return {
      message: "Updated Success",
      room: Data,
    }
  }

  async deleteRoom(id: string): Promise<any> {
    await this.roomsRepository.delete(id);
    return {
      message: 'Deleted Success',
    }
  }
}
