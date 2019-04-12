import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';

import { MakeService } from './services/make.service';

@NgModule({
  declarations: [AppComponent, VehicleFormComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
