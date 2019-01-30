import { Routes, RouterModule } from '@angular/router';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo.component';
import { HomeComponent } from './home/home.component';
import { PersonalInterestsComponent } from './personal-interests/personal-interests.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:id', component: HomeComponent},
  {path: 'yo', component: YoMoFoComponent},
  {path: 'dbaa', component: HomeComponent},
  {path: '1', component: HomeComponent},
  {path: 'personalInterests', component: PersonalInterestsComponent},
  {path: '2', component: PersonalInterestsComponent}
];

export const routing = RouterModule.forRoot(routes);
