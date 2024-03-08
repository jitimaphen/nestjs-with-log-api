// logging.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`[${new Date().toISOString()}] Request received: ${req.method} ${req.originalUrl}`);
    next();
  }
}
