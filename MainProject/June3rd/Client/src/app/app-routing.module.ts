import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingPropertiesComponent } from './trending-properties/trending-properties.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'trendingProp', component : TrendingPropertiesComponent},
  
  {path: '**', redirectTo : 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
