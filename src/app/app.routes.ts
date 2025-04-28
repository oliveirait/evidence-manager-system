import { Routes } from '@angular/router';
import { SistemasComponent } from './components/sistemas/sistemas.component';
import { SprintsComponent } from './components/sprints/sprints.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sistemas', component: SistemasComponent },
    { path: 'sprints', component: SprintsComponent }
];
