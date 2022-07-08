import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomsService } from './rooms.service';

@ApiTags('Room')
@Controller('room')
export class RoomsController {
  constructor(private roomService: RoomsService) { }

  @Get('/getall')
  async getAllRoom(
  ): Promise<any> {
    return await this.roomService.getRoom();
  }

  @Post('/create')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        roomName: { type: 'string' },
        address: { type: 'string' },
        price: { type: 'string' },
        description: { type: 'string' },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async createRoom(
    @Body() body: CreateRoomDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    return await this.roomService.createRoom(body, file);
  }

  @Put('/update/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id update',
    type: String
  })
  async updateRoom(
    @Param() id: string,
    @Body() body: UpdateRoomDto,
  ): Promise<any> {
    return await this.roomService.updateRoom(id, body);
  }

  @Delete('/delete/:id')
  @ApiConsumes('multipart/form-data')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id delete',
    type: String
  })
  async deleteRoom(
    @Param() id: string,
  ): Promise<any> {
    return await this.roomService.deleteRoom(id);
  }
}
