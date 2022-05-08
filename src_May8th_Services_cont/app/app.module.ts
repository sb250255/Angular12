import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import {basicDir} from './basic-dir/basicDir';
import {basicDir1} from './basic-dir1/basicDir1';
import { BetterOddDirDirective } from './better-odd-directive/better-odd-dir.directive';
import { UnlessDirective } from './unless.directive'
import {sortPipe} from './sortPipe';
import { FilteredPipePipe } from './filtered-pipe.pipe';
import { ReversePipePipe } from './reverse-pipe.pipe';
import { OrderByPipePipe } from './order-by-pipe.pipe';
import { CheckBoxSalaryPipePipe } from './check-box-salary-pipe.pipe';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';


@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    basicDir,
    basicDir1,
    BetterOddDirDirective,
    UnlessDirective,
    sortPipe,
    FilteredPipePipe,
    ReversePipePipe,
    OrderByPipePipe,
    CheckBoxSalaryPipePipe,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
