import { Routes } from '@angular/router';
import { ScoresPage } from './pages/scores-page/scores-page';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
    { path: "", component: Homepage },
    { path: "punteggi", component: ScoresPage }
];
