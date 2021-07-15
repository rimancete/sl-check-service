import { Module, Global } from '@nestjs/common';
import { LoginService } from './login.service';
import { ConfigModule } from '../../../config/config.module';
import { HttpModule } from '../http/http.module';
import { HttpService } from '../http/http.service';

@Global()
@Module({
  imports: [HttpModule, ConfigModule],
  providers: [LoginService, HttpService],
  exports: [LoginService, HttpService]
})

export class LoginModule {}
