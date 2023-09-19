import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getTextApi(): string {
    return 'Hello World! API';
  }
}
