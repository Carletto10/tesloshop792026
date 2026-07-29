import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'secondRoute',
        loadComponent : () => import('./second-route-test/second-route-test.component').then( m => m.SecondRouteTestComponent)
    },
    {
        path : 'routeTest', 
        loadComponent : () => import('./route-test/route-test.component').then( m => m.RouteTestComponent)
    }
    
];
