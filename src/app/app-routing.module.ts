import { LiveTrackingComponent } from './live-tracking/live-tracking.component';
import { ContactComponent } from './contact/contact.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { IntermodalAndProjectCargoComponent } from './transportation/intermodal-and-project-cargo/intermodal-and-project-cargo.component';
import { TruckComponent } from './transportation/truck/truck.component';
import { RailwayComponent } from './transportation/railway/railway.component';
import { RegionsComponent } from './regions/regions.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SpecialOffersComponent, pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'transportation/railway', component: RailwayComponent },
  { path: 'transportation/truck', component: TruckComponent },
  { path: 'transportation/intermodal-and-project-cargo', component: IntermodalAndProjectCargoComponent },
  { path: 'warehouses', component: WarehousesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'live-tracking', component: LiveTrackingComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
