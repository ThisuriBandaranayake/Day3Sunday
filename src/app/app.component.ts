import { Component } from '@angular/core';
import { HolelDataServiceService} from './holel-data-service.service';
import { hotel} from './hotelDataModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 
hotels : hotel[];
  constructor(private hotelService : HolelDataServiceService){
   
  }
 
  ngOnInit(){
    this.hotelService.getHotelData()
    .subscribe((data : hotel[])=>{
this.hotels = data
    })

  }

}
