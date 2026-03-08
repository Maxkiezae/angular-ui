import { Routes } from '@angular/router';
import { AllEpisodeList } from '../Pages/all-episode-list/all-episode-list';
import { Home } from '../Pages/home/home';
import { Ep1 } from '../component/ep-1/ep-1';
import { Ep2 } from '../component/ep-2/ep-2';
import { Ep3 } from '../component/ep-3/ep-3';
import { Ep4 } from '../component/ep-4/ep-4';
import { Ep5 } from '../component/ep-5/ep-5';
import { Ep6 } from '../component/ep-6/ep-6';
import { Ep7 } from '../component/ep-7/ep-7';
import { Ep8 } from '../component/ep-8/ep-8';
import { Ep9 } from '../component/ep-9/ep-9';
import { Ep10 } from '../component/ep-10/ep-10';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'all-episode-list', component: AllEpisodeList },
  { path: 'ep-1', component: Ep1 },
  { path: 'ep-2', component: Ep2 },
  { path: 'ep-3', component: Ep3 },
  { path: 'ep-4', component: Ep4 },
  { path: 'ep-5', component: Ep5 },
  { path: 'ep-6', component: Ep6 },
  { path: 'ep-7', component: Ep7 },
  { path: 'ep-8', component: Ep8 },
  { path: 'ep-9', component: Ep9 },
  { path: 'ep-10', component: Ep10 }
];
