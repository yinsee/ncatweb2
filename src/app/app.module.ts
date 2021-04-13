import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/nav/top/top.component';
import { BottomComponent } from './components/nav/bottom/bottom.component';
import { ApiHttpService } from 'src/services/api-http.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionService } from 'src/services/session.service';
import { HomeComponent } from './home/home.component';
import { WebpageComponent } from './webpage/webpage.component';
import { NumPipe } from './num.pipe';
import { TokenomicsComponent } from './components/body/tokenomics/tokenomics.component';
import { FeaturesComponent } from './components/body/features/features.component';
import { RoadmapComponent } from './components/body/roadmap/roadmap.component';
import { FoldComponent } from './components/body/fold/fold.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BottomComponent,
    HomeComponent,
    WebpageComponent,
    NumPipe,
    TokenomicsComponent,
    FeaturesComponent,
    RoadmapComponent,
    FoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    ApiHttpService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
