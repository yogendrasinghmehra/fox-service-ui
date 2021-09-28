import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from './rest.service';

@Injectable()
export class AuthService {

    constructor(private restService:RestService)
    {
    }
    
   
    login(loginDetails:any): Observable<any> {
      //https://www.bee-neca.in/oauth/token
     
    
        return this.restService.post('/login',loginDetails).pipe(map(data => data));
      }


}
