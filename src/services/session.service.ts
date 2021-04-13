import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ApiHttpService } from './api-http.service';
import { Price } from './models.definitioins';
import * as blockchain from "../services/blockchain";
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  price: Price = {};
  address: string | null = null;
  balance: number = 0;

  get haveWallet(): boolean {
    return window.ethereum?.isConnected();
  }

  get walletConnected(): boolean {
    if (this.address !== window.ethereum?.selectedAddress) {
      this.getBalance();
    }
    return window.ethereum?.selectedAddress !== null;
  }

  constructor(private http: ApiHttpService) {
    this.updatePrice();
  }

  updatePrice() {
    this.http.get(environment.priceDataJson)
      .subscribe((res: any) => {
        this.price = res;
        console.log(res);
      }, (error) => {
        // retry in 5 sec
        setTimeout(() => this.updatePrice(), 5000);
      }, () => {
        // get new price every 15min, if u wait long enough :D
        setTimeout(() => this.updatePrice(), 15 * 60 * 1000);
      });
  }

  //  wallet action
  async connectwallet() {
    if (window.ethereum === undefined) {
      return;
    }
    window.ethereum.enable().then(() => {
      this.getBalance();
    });
  }


  private async getBalance(): Promise<any> {
    this.address = window.ethereum.selectedAddress;
    blockchain.getBalance(this.address).then((result) => {
      this.balance = result;
      // get new balance every 30s
      setTimeout(() => this.getBalance(), 30000);
    });
  }

}
