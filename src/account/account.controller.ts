import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Render,
  Redirect,
} from '@nestjs/common';
import { AccountService } from './account.service';
@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Render('form')
  @Get('index')
  getData() {
    return { errorMessage: '123' };
  }
  @Post('find')
  @Redirect('index')
  findAccount(@Body('msv') msv: any) {
    // TODO: make validation before redirect to table
    const check = this.accountService.checkStudentExist(msv);
    return check;
  }
  @Get('find/:msv')
  @Render('table')
  findByMsv(@Param('msv') msv: any) {
    // return msv;
    return this.accountService.findByMsv(+msv);
  }
  @Get('404')
  @Render('404')
  notFound() {}
}
