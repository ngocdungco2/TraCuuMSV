import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Account } from './schemas/account.schemas';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async checkStudentExist(msv: number) {
    const student = await this.accountModel.findOne({
      MSV: msv,
    });
    if (!student) {
      return { url: `/account/404` };
    }
    return { url: `/account/find/${msv}` };
  }

  async findByMsv(msv: number) {
    try {
      return await this.accountModel.findOne({
        MSV: msv,
      });
    } catch (e) {
      console.error(e);
      return new ForbiddenException('Cant not find MSV');
    }
  }
}
