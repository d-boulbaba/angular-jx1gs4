import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// Add
const agoraConfig: AgoraConfig = { AppID: 'APP ID' };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularAgoraRtcModule.forRoot(agoraConfig) // Add
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

