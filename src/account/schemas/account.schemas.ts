import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  MSV: number;

  @Prop()
  FullName: string;

  @Prop()
  SpecializeIn: string;

  @Prop()
  MailVNU: string;

  @Prop()
  PassVNU: string;

  @Prop()
  MailOffice: string;

  @Prop()
  PassOffice: string;

  @Prop()
  DateOfBirth: string;

  @Prop()
  Username: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
