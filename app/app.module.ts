import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }    from './hero.service';
import { AppRoutingModule } from './app-routing.module';
import './rxjs-extension' ;


@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, HeroComponent, DashboardComponent, HeroDetailComponent, HeroSearchComponent ],
  providers:    [ HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


