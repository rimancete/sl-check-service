import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SLModule } from './service/sl-check/sl-check.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
	  ScheduleModule.forRoot(),
	  SLModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
