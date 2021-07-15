import { Module } from '@nestjs/common';
import { LogsModule } from '../../core/logs/logs.module';
import { SLService } from './sl-check.service';
import { LoginService } from '../../core/b1/service-layer/login/login.service';
import { HttpService } from '../../core/b1/service-layer/http/http.service';
import { ConfigService } from '../../core/config/config.service';

@Module({
	imports: [ LogsModule],
	providers: [SLService, LoginService, HttpService, ConfigService],
	exports: [SLService],
})
export class SLModule { }
