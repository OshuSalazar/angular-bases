import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CounterModule } from './Counter/couter.module';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListModule } from './heroes/list/list.module';
import { HeroModule } from './heroes/hero/hero.modules';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
