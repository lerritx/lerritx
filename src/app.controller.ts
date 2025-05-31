import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('/it3')
  getit2(): string {
    return 'it works3';
  @Get()
  getHello(): any {
    return 
    {
      name: 'lerritx',
      id: 155444, 
    };
  }
}
