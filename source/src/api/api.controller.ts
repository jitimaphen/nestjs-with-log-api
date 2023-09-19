import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Get()
  getApi(): string {
    return this.appService.getTextApi();
  }

  @Post('/plus')
  plus(@Body() body): object {
    if (Number.isNaN(Number(body.a)) || Number.isNaN(Number(body.b))) {
      return { error: 'not a number' };
    }
    const result = Number(body.a) + Number(body.b);
    return { result: result };
  }

  @Post('/minus')
  minus(@Body() body): object {
    if (Number.isNaN(Number(body.a)) || Number.isNaN(Number(body.b))) {
      return { error: 'not a number' };
    }
    const result = Number(body.a) - Number(body.b);
    return { result: result };
  }

  @Post('/multiple')
  multiple(@Body() body): object {
    if (Number.isNaN(Number(body.a)) || Number.isNaN(Number(body.b))) {
      return { error: 'not a number' };
    }
    const result = Number(body.a) * Number(body.b);
    return { result: result };
  }

  @Post('/divide')
  divide(@Body() body): object {
    if (Number.isNaN(Number(body.a)) || Number.isNaN(Number(body.b))) {
      return { error: 'not a number' };
    }
    const result = Number(body.a) / Number(body.b);
    return { result: result };
  }
}
