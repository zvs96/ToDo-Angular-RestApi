import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProsComponent } from './component/pros/pros.component';
import { ConsComponent } from './component/cons/cons.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { methods } from './store/methods.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProsComponent,
    ConsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      _methods: methods,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
