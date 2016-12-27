/**
 * Created by colin on 2016/12/26.
 */
import { NgModule }       from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent} from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';


const routes : Routes = [
  {
    path:'heroes',
    component: HeroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
