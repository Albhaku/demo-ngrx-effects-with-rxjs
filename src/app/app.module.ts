import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule, NgbAlertModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { appReducer } from './app.reducer';
import { AppEffects } from './app.effects';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CommonModule,
    HttpClientModule,
    NgbAlertModule,
    NgbAccordionModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      name: 'Brock BOS',
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
