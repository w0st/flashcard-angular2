import { Routes } from '@angular/router';
import { GroupsComponent } from './groups.component';
import { GroupComponent } from './group.component';

export const GroupRoutes: Routes = [
    { path: 'group/:id', component: GroupComponent},
    { path: 'groups', component: GroupsComponent }
];
