import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';

//import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginPageComponent
    //ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
