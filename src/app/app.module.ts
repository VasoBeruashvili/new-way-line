import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegionsComponent } from './regions/regions.component';
import { RailwayComponent } from './transportation/railway/railway.component';
import { TruckComponent } from './transportation/truck/truck.component';
import { IntermodalAndProjectCargoComponent } from './transportation/intermodal-and-project-cargo/intermodal-and-project-cargo.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LiveTrackingComponent } from './live-tracking/live-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialOffersComponent,
    AboutUsComponent,
    RegionsComponent,
    RailwayComponent,
    TruckComponent,
    IntermodalAndProjectCargoComponent,
    WarehousesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LiveTrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
