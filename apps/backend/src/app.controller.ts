import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController {
  @Public()
  @Get()
  getOk(@Res() res: Response) {
    return res.sendStatus(200);
  }
}
