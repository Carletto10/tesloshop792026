import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'secondRoute',
        loadComponent : () => import('./second-route-test/second-route-test.component').then( m => m.SecondRouteTestComponent)
    },
    {
        path : 'routeTest', 
        loadComponent : () => import('./route-test/route-test.component').then( m => m.RouteTestComponent)
    },
        {
        path : 'routeExample', 
        loadComponent : () => import('./router-root/router-root.component').then( m => m.RouterRootComponent),
        children : [
            {
                path : 'appRoute',
                // corrected path casing/kebab-case to match file system naming
                loadComponent : () => import('./router-root/router-appRoute-component/router-appRoute-component').then( m => m.RouteAppRouteComponent)
            },
            {
                path : 'appComponent',
                // corrected path casing/kebab-case to match file system naming
                loadComponent : () => import('./router-root/router-appComponentFile-component/router-appComponentFile-component').then( m => m.RouteAppComponentFileComponent)
            }
        ]
    }
];
