import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './post.reducer';
import { AnotherComponent } from './another/another.component';
import { MyService } from './my-service';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( { post: postReducer, message: simpleReducer })
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
