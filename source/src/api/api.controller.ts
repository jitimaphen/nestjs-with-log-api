import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly appService: ApiService) { }

  @Get()
  getApi(): string {
    return this.appService.getTextApi();
  }

  @Get('/hello')
  getHello(): string {
    return 'Hello path';
  }

  @Get('/random')
  getRandomString(): string {
    let data = (Math.random() + 1).toString().substring(2);
    console.log(`[${new Date().toISOString()}] Respinse data random: ${data}`);
    return data
  }


}
