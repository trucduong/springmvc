export class InvalidValue {
    errCode: string;
    message: string;
    params: any[];
    constructor(errCode: string, params?:any[], message?: string) {
        this.errCode = errCode;
        this.message = message;
        this.params = params;
    }
}