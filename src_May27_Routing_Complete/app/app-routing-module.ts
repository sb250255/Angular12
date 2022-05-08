import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import {ServerService} from './servers/server.servcie';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGaurd } from './auth.gaurd.service';

const appRoutes : Routes = [
    {path : '', component : HomeComponent},
    {path : 'users', component : UsersComponent, children: [
      {path : ':id/:name', component : UserComponent},
    ]},
    {path : 'servers', component : ServersComponent, canActivate : [AuthGaurd], children : [
      {path : ':id', component : ServerComponent},
      {path : ':id/edit', component : EditServerComponent}
    ]},
    {path : 'not-found', component : PageNotFoundComponent},
    {path : '**', redirectTo : ''}
  ]

@NgModule({
imports : [
  RouterModule.forRoot(appRoutes)
],
exports : [RouterModule]
})



export class AppRoutingModule {

}