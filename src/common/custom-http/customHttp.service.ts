import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class CustomHttpService {
    constructor (
        private readonly httpService : HttpService,
        ){}

    async send(url:string, method:string, data: any, config?:any){
        if(method == 'get'){
            this.httpService.get(url, config);
        } else {
            this.httpService.post(url, config, data);
        }
        
    }

}