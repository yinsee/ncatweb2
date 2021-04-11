import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ApiHttpService } from './api-http.service';
import { Price } from './models.definitioins';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  price: Price = {};
  constructor(private http: ApiHttpService) {
    this.updatePrice();
  }

  updatePrice() {
    this.http.get(environment.priceDataJson)
      .subscribe((res: any) => {
        this.price = res;
        console.log(res);
      }, (error) => {
        //
      });
  }
}
