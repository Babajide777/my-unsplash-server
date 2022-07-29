import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('auth')
export class AuthController {
  constructor(private authSerive: AuthService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }

  @Post('login')
  signin(@Body() authenticateUserDto: CreateUserDto) {
    console.log(authenticateUserDto);
  }
}
