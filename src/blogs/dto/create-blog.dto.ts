import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class  CreateBlogDto {
    
    @ApiProperty({type: String , description: 'blogName'})
    @IsNotEmpty()
    @IsOptional()
    blogName: string;

    @ApiProperty({type: String , description: 'title'})
    @IsNotEmpty()
    @IsNotEmpty()
    title: string;

    @ApiProperty({type: String , description: 'content'})
    @IsNotEmpty()
    @IsNotEmpty()
    content: string;

    @ApiProperty({type: String , description: 'comments'})
    @IsNotEmpty()
    @IsNotEmpty()
    comments: string;

    @ApiProperty({type: String , description: 'images'})
    @IsNotEmpty()
    @IsNotEmpty()
    images: string;

    @ApiProperty({type: String , description: 'userId'})
    @IsNotEmpty()
    @IsNotEmpty()
    userId: string;
}