import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { City } from "../../modals/admin/city.modals";
import { RestService } from "../rest.service";

@Injectable()
export class CityService {

    constructor(private restService:RestService) {}
    
    getAll():Observable<City[]>{
        return this.restService.get("/city/list").pipe(map(data => data));
    }

}