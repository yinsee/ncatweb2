import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InViewportModule } from 'ng-in-viewport';
import { ApiHttpService } from 'src/services/api-http.service';
import { SessionService } from 'src/services/session.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/body/features/features.component';
import { FoldComponent } from './components/body/fold/fold.component';
import { RoadmapComponent } from './components/body/roadmap/roadmap.component';
import { TokenomicsComponent } from './components/body/tokenomics/tokenomics.component';
import { BottomComponent } from './components/nav/bottom/bottom.component';
import { TopComponent } from './components/nav/top/top.component';
import { StrapiMediaComponent } from './components/strapi-media/strapi-media.component';
import { HomeComponent } from './home/home.component';
import { MarkdownPipe } from './markdown.pipe';
import { NumPipe } from './num.pipe';
import { WebpageComponent } from './webpage/webpage.component';
import { WebpagesComponent } from './webpages/webpages.component';


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
    FoldComponent,
    MarkdownPipe,
    StrapiMediaComponent,
    WebpagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    InViewportModule,
  ],
  providers: [
    ApiHttpService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
