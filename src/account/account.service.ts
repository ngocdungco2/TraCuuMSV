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
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }

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
      const data = await this.accountModel.findOne({
        MSV: msv,
      });
      return data;
    } catch (e) {
      console.error(e);
      return new ForbiddenException('Cant not find MSV');
    }
  }
}
