import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  environment = environment;
  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
