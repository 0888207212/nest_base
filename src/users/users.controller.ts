import { Body, Controller, Delete, Get, Param, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { FindUserDto } from "./dto/find-user.dto";
import { UsersService } from "./users.service";
import { Response, Request } from "express";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Roles } from "src/auth/decorator/roles.decorator";
import { JwtAuthGuard } from "src/auth/guards/jwt-guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { UserRole } from "./entitys/user.entity";
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UsersController {
    constructor(private userService:UsersService){}

    @Post('/create')
    @ApiBody({type: CreateUserDto})
    async create(
        @Body() body: CreateUserDto,
    ): Promise<any> {
        return await this.userService.createUser(body);
    }

    @Post('/update/:id')
    @ApiBody({type: UpdateUserDto})
    async updateUser(
        @Param() id: string,
        @Body() body: UpdateUserDto,
    ): Promise<any> {
        return await this.userService.updateUser(id, body);
    }

    @Post('/login')
    @ApiBody({type: FindUserDto})
    async loginUser(
        @Body() body: FindUserDto,
        @Res({passthrough: true}) res: Response,
    ): Promise<any> {
       return await this.userService.findUser(body, res);
    }

    @ApiBearerAuth()
    @Roles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('/get')
    // @ApiQuery({ name: 'role', enum: UserRole })
    async getUser(
        @Req() req: Request,
        // @Query('role') role: UserRole = UserRole.ADMIN
    ): Promise<any> {
       return await this.userService.getUser(req);
    }

    @Post('/logout')
    async logOutUser(
        @Res({passthrough: true}) res: Response,
    ): Promise<any> {
       return await this.userService.logOutUser(res);
    }

    @Delete('/:id')
    async deleteUser(
        @Param()id: string,
    ):Promise<any>{
        return await this.userService.deleteUSer(id);
    }
}