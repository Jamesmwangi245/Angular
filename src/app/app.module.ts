import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { TrialComponent } from './trial/trial.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    NewcomponentComponent,
    FormcomponentComponent,
    QuotesComponent,
    AppComponent,
    TrialComponent,
    DetailComponent,
    FooterComponent
  ]
})
export class AppModule { }
