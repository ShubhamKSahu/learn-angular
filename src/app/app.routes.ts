import { Routes } from '@angular/router';
import { UserComponent } from './Component/user/user.component';
import { NgForComponent } from './Component/ng-for/ng-for.component';
import { NgIfComponent } from './Component/ng-if/ng-if.component';
import { GetApiComponent } from './Component/get-api/get-api.component';
import { PostApiComponent } from './Component/post-api/post-api.component';

export const routes: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
     {
        path: 'ngfor',
        component: NgForComponent
    },
     {
        path: 'ngif',
        component: NgIfComponent
    },
     {
        path: 'getapi',
        component: GetApiComponent
    },
    {
        path: 'postapi',
        component: PostApiComponent
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    }
];
