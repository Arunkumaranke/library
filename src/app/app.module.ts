import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListbookComponent } from './listbook/listbook.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    DashboardComponent,
    EditComponent,
    CreateComponent,
    ListbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
