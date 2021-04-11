import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Links, Price } from 'src/services/models.definitioins';
import { ApiHttpService } from 'src/services/api-http.service';
import { SessionService } from 'src/services/session.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  isMenuCollapsed = true;

  links: Links[] = [
    { title: 'Roadmap', fragment: '#roadmap' },
    { title: 'Contract', url: environment.contractAddress },
    { title: 'WhitePaper', url: environment.whitepaper },
    {
      title: 'More', items: [
        { title: 'DAO', fragment: '#dao' },
        { title: 'NFT', fragment: '#nft' },
      ]
    },
  ];

  constructor(public route: ActivatedRoute, public session: SessionService) { }

  ngOnInit(): void {

  }

}
