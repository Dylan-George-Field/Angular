import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.component';
import { VideoService } from './video.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ VideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
