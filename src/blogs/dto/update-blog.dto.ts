import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateBlogDto {

    @ApiProperty({type: String , description: 'blogName'})
    @IsNotEmpty()
    @IsOptional()
    blogName: string;

    @ApiProperty({type: String , description: 'comments'})
    @IsNotEmpty()
    @IsOptional()
    comments: string;
}