import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockPitModule } from './cockpit/cockpit.module';
import { SeverElemenetModule } from './sever-element/serverElement.module';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameControlModule } from './game-control/game-control.module';
import { OddComponentModule } from './odd/odd.module';
import { EvenComponentModule } from './even/even.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CockPitModule,
    SeverElemenetModule,
    GameControlModule,
    OddComponentModule,
    EvenComponentModule
  ],
  providers: [
    CockPitModule,
    SeverElemenetModule,
    GameControlModule,
    OddComponentModule,
    EvenComponentModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
