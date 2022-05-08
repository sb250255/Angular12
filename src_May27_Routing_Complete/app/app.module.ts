import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import {ServerService} from './servers/server.servcie';
import {AppRoutingModule} from './app-routing-module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth.gaurd.service';

// const appRoutes : Routes = [
//   {path : '', component : HomeComponent},
//   {path : 'users', component : UsersComponent, children: [
//     {path : ':id/:name', component : UserComponent},
//   ]},
//   {path : 'servers', component : ServersComponent, children : [
//     {path : ':id', component : ServerComponent},
//     {path : ':id/edit', component : EditServerComponent}
//   ]},
//   // {path : 'users/:id/:name', component : UserComponent},
//   // {path : 'servers/:name/:status', component : ServerComponent},
//   // {path : 'servers/:id', component : ServerComponent},
//   // {path : 'servers/:id/edit', component : EditServerComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService, AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
