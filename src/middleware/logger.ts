import { Injectable, Logger, NestMiddleware, Scope } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable({ scope: Scope.REQUEST })
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(new Date().toISOString());
    next();
  }
}
