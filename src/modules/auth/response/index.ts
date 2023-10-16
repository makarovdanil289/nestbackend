/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

class UserResponse {

    @ApiProperty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsString()
    username:string

    @ApiProperty()
    @IsString()
    email: string
}

export class AuthUserResponse {
    @ApiProperty()
    user:UserResponse
    
    @ApiProperty()
    @IsString()
    token: string
    
    
    // @ApiProperty()
    // @IsString()
    // password: string
}