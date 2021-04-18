import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebpagesComponent } from './webpages/webpages.component';
import { HomeComponent } from './home/home.component';
import { WebpageComponent } from './webpage/webpage.component';

const routes: Routes = [
  { path: 'pages', component: WebpagesComponent, },
  { path: 'p/:url/:id', component: WebpageComponent, },
  { path: '**', redirectTo: '/' },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
