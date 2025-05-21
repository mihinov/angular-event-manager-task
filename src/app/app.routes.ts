import { Routes } from '@angular/router';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { EventManagerComponent } from './features/event-management/components/event-manager/event-manager.component';

export const routes: Routes = [
  { component: LayoutMainComponent, path: '', children: [
    { component: PageMainComponent, path: '', children: [
      { component: EventManagerComponent, path: '' }
    ]}
  ] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
