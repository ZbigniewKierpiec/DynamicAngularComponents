import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicOneComponent } from './dynamic-one/dynamic-one.component';
import { DynamicTwoComponent } from './dynamic-two/dynamic-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicOneComponent,
    DynamicTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
