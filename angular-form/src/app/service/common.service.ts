import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/enviroment';
import { Country, State, City }  from 'country-state-city';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  apiUrl:string = environment.apiUrl;
  countries: any;
  public userSubject = new Subject<any>();
  public behaviorSubject = new BehaviorSubject<string>('Initial Value');

  constructor(private http: HttpClient) {}

  sendRequest(type: any, payload: any,endpoint:any) {
    this.apiUrl = this.apiUrl + endpoint;
    switch (type) {
      case 'get':
        return this.http.get(this.apiUrl, payload)
      case 'post':
        return this.http.post(this.apiUrl, payload)
      case 'put':
        return this.http.put(this.apiUrl, payload)
      case 'delete':
        return this.http.delete(this.apiUrl, payload)
      default:
        return this.http.get(this.apiUrl, payload)
    }
  }

  getAllCountries(){
    this.countries = Country.getAllCountries();
    return this.countries;
  }

  getAllState(isoCode : string ){
    return State.getStatesOfCountry(isoCode);
  }

  getAllCity(){
    return City.getAllCities()
  }
}
