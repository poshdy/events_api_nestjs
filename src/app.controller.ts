import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): { messages: string[] } {
    return this.appService.getHello();
  }

  @Post('/hi')
  getHi(@Body('name') name: string): { message: string } {
    return this.appService.getHi(name);
  }
}
