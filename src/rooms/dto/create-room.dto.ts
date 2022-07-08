import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";


export class CreateRoomDto {

    @ApiProperty({type: String , description: 'roomName'})
    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    roomName: string;

    @ApiProperty({type: String , description: 'address'})
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    address: string;

    @ApiProperty({type: String , description: 'img'})
    @IsString()
    @IsNotEmpty()
    img: string;

    @ApiProperty({type: String , description: 'img'})
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty({type: String , description: 'description'})
    @IsString()
    @IsNotEmpty()
    description: string;
}