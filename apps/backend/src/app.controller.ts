import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getOk(@Res() res: Response) {
    return res.sendStatus(200);
  }
}
