//Define route
import Home from './components/HomeComponent.vue';
import Login from './components/login/LoginComponent.vue';
import KPIClient from './components/client/kpi/KPIComponent.vue';
import WorkplaceClient from './components/client/workplace/WorkplaceComponent.vue';
import FavouriteClient from './components/client/favourite/FavouriteComponent.vue';
import CategoryKPILevelClient from './components/client/categoryKPILevel/CategoryKPILevelComponent.vue';

import AccountAdmin from './components/admin/account/AccountComponent.vue';
import AccountLevelAdmin from './components/admin/accountLevel/AccountLevelComponent.vue';
import CategoryAdmin from './components/admin/category/CategoryComponent.vue';
import CategoryKPILevelAdmin from './components/admin/categoryKPILevel/CategoryKPILevelComponent.vue';
import KPIAdmin from './components/admin/kpi/KPIComponent.vue';
import KPILevelAdmin from './components/admin/kpilevel/KPILevelComponent.vue';
import LevelAdmin from './components/admin/level/LevelComponent.vue';


export const routes = [
    {
        path: '/', name: 'homepage', component: Home
    },
    {
        path: '/client/kpi', name: 'kpi', component: KPIClient
    },
    {
        path: '/client/workplace', name: 'workplace', component: WorkplaceClient
    },
    {
        path: '/client/favourite', name: 'favourite', component: FavouriteClient
    },
    {
        path: '/client/categorykpilevel', name: 'categorykpilevel', component: CategoryKPILevelClient
    },
    {
        path: '/login', name: 'login', component: Login
    },
    {
        path: '/admin/account', name: 'account', component: AccountAdmin
    },
    {
        path: '/admin/accountlevel', name: 'accountleveladmin', component: AccountLevelAdmin
    },
    {
        path: '/admin/category', name: 'categoryadmin', component: CategoryAdmin
    }
    ,
    {
        path: '/admin/categorykpilevel', name: 'categorykpileveladmin', component: CategoryKPILevelAdmin
    },
    {
        path: '/admin/kpi', name: 'kpiadmin', component: KPIAdmin
    }
    ,
    {
        path: '/admin/kpilevel', name: 'kpileveladmin', component: KPILevelAdmin
    },
    {
        path: '/admin/level', name: 'leveladmin', component: LevelAdmin
    }
];

