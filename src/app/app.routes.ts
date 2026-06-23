import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ErrorComponent } from './error-component/error-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'error', component: ErrorComponent },


  // wildcard route (404 page)
  { path: '**', component: ErrorComponent }
];
