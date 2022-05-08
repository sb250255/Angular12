import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DealsComponent } from './deals/deals.component';
import { StoresComponent } from './stores/stores.component';
import { ContactComponent } from './contact/contact.component';
import { Router, Routes, RouterModule } from '@angular/router';

const appRoutes : Routes = [
  {path : 'products', component: ProductsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    DealsComponent,
    StoresComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
