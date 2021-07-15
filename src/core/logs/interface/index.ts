export enum LogModule {
	SL_LOGIN = 50
}

export enum LogType {
	ERROR = 1,
	SUCCESS = 2,
	INFORMATION = 3,
	BUSINESS = 4
}

export interface Log {
	LOGTYPECODE: LogType;
	MODULE: LogModule;
	MESSAGE: string;
	FULLMESSAGE: string;
	KEY: string;
	REQUESTOBJECT: any;
	RESPONSEOBJECT: any;
}


export interface LogSuccessRequest {
	key: string,
	message?: string,
	module: LogModule,
	requestObject: any,
	responseObject: any
}

export interface LogErrorRequest {
	key: string,
	module: LogModule,
	requestObject?: any,
	exception: any
}

