import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HolelDataServiceService {

  constructor(private http : HttpClient) { }//HttpClient=object type variable

  //sends get request and returns its response data
  getHotelData(){
return this
           .http.get(' https://my-json-server.typicode.com/ThisuriBandaranayake/Day3Sunday/markers')
  }
}
