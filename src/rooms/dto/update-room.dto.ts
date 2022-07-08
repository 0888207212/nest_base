import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateRoomDto {

    @ApiProperty({type: String , description: 'roomName'})
    @IsOptional()
    roomName: string;

    @ApiProperty({type: String , description: 'address'})
    @IsOptional()
    address: string;

    @ApiProperty({type: String , description: 'img'})
    @IsOptional()
    img: string;

    @ApiProperty({type: String , description: 'price'})
    @IsOptional()
    price: string;

    @ApiProperty({type: String , description: 'description'})
    @IsOptional()
    description: string;
}