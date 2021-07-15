import { Injectable, Logger } from '@nestjs/common';
import { LogsService } from '../../core/logs/logs.service'
import { LogModule } from '../../core/logs/interface';
import { LoginService } from '../../core/b1/service-layer/login/login.service';
import * as _ from 'lodash';
import { Runner } from '../../core/runner';
import { Exception } from 'src/core/exception';

@Injectable()
export class SLService extends Runner {

	private logger = new Logger(SLService.name);

	constructor(
		private readonly loginService: LoginService,
		private readonly logsService: LogsService
	) {
		super();
	}

	async proccess() {
		this.logger.log(`Service Layer login check now...`);
		const response = await this.loginService.login();
		console.log('sl response', response);
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const ms = today.getMilliseconds();

		const key = dd + mm + ms ;
		if (response.error) {
			await this.logsService.logError({ 
				key: key, 
				module: LogModule.SL_LOGIN, 
				exception: new Exception({
					code: 'SF002',
					message: 'Erro ao conectar com a Service Layer.',
					request: 'Credenciais para autenticação',
					// testa onde estão os erros e insere-o
					response: response.error
				}), 
			});
		} else{
			await this.logsService.logSuccess({
				key: key, module: LogModule.SL_LOGIN, requestObject: 'Credenciais para autenticação', responseObject: '200' });
		}
		await this.loginService.logout();

		if (response) {
			this.logger.log(`Process Finished...`)
		}

	}

}