import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { GroupRoutes } from './group/index';
import { QuizRoutes } from './quiz/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...QuizRoutes,
    ...GroupRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
