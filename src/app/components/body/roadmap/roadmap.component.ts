import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  environment = environment;
  constructor(public session: SessionService) { }

  ngOnInit(): void {
  }

}
