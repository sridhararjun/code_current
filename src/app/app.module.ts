import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxPopper } from 'angular-popper';
import { CraftsComponent } from './components/crafts/crafts.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
// import { OurMasterpiecesComponent } from './components/OurMasterpieces/OurMasterpieces.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/OurMasterpieces/OurMasterpieces.component';
import { AgmCoreModule } from '@agm/core';
import { NgxGalleryModule } from 'ngx-gallery';
import { HeritageComponent } from './components/heritage/heritage.component';
import { MasterpiecesHomeComponent } from './components/masterpieces-home/masterpieces-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CraftsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    GalleryComponent,
    HeritageComponent,
    MasterpiecesHomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPopper,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDbDdcf6ahRa9Wat93EfnlyQkqkHE01RA4"
    }),
    RouterModule.forRoot([
      {
        path:'', 
        component:HomeComponent
      },
      {
        path:'home', 
        component:HomeComponent
      },
      {
        path:'heritage', 
        component:HeritageComponent
      },
      {
        path:'masterpieces', 
        component:MasterpiecesHomeComponent
      },
      {
        path:'about-us', 
        component:AboutUsComponent
      },
      {
        path:'crafts', 
        component:CraftsComponent
      },
      {
        path:'contact-us', 
        component:ContactUsComponent
      },
      {
        path:'**', 
        component:HomeComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
