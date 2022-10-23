import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeDModelsComponent } from './three-d-models/three-d-models.component';
import { EngineComponentComponent } from './engine-component/engine-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeDModelsComponent,
    EngineComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
