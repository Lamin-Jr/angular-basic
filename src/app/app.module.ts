import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockPitModule } from './cockpit/cockpit.module';
import { SeverElemenetModule } from './sever-element/serverElement.module';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlModule } from './game-control/game-control.module';
import { OddComponentModule } from './odd/odd.module';

@NgModule({
  declarations: [AppComponent, OddComponent, EvenComponent],
  imports: [
    BrowserModule,
    CockPitModule,
    SeverElemenetModule,
    GameControlModule,
    OddComponentModule,
  ],
  providers: [
    CockPitModule,
    SeverElemenetModule,
    GameControlModule,
    OddComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
