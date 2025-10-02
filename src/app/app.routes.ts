import { Routes } from '@angular/router';

import { Home } from './pages/home/home.component';
import { Profile } from './pages/profile/profile.component';
import { SleepLog } from './pages/log/log.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'log',
    title: 'App Sleep Log Page',
    component: SleepLog,
  },
  {
    path: 'profile',
    title: 'App Profile Page',
    component: Profile,
  },
  { path: '**', redirectTo: '' }
];
