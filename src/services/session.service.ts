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
    this.connectwallet();
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

  async connectwallet() {
    // const providerOptions = {
    //   walletconnect: {
    //     package: WalletConnectProvider, // required
    //     options: {
    //       infuraId: "INFURA_ID" // required
    //     }
    //   }
    // };

    // const web3Modal = new Web3Modal({
    //   network: "mainnet", // optional
    //   cacheProvider: true, // optional
    //   providerOptions,
    // });

    // var provider = await web3Modal.connect();
    // this.web3 = new Web3(provider);

    // // Subscribe to accounts change
    // provider.on("accountsChanged", (accounts: string[]) => {
    //   console.log(accounts);
    // });

    // // Subscribe to chainId change
    // provider.on("chainChanged", (chainId: number) => {
    //   console.log(chainId);
    // });

    // // Subscribe to provider connection
    // provider.on("connect", (info: { chainId: number }) => {
    //   console.log(info);
    // });

    // // Subscribe to provider disconnection
    // provider.on("disconnect", (error: { code: number; message: string }) => {
    //   console.log(error);
    // });


  }
}
