import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { messages: string[] } {
    return {
      messages: ['ji', 'a', 'gd'],
    };
  }

  getHi(name: string): { message: string } {
    return {
      message: `Hi ${name}`,
    };
  }
}
