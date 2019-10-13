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
import store from '../main/store/index'
const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }
    next('/login')
}

export const routes = [
    {
        path: '/', name: 'homepage', component: Home
    },
    {
        path: '/client/kpi', name: 'kpi', component: KPIClient, beforeEnter: ifAuthenticated
    },
    {
        path: '/client/workplace', name: 'workplace', component: WorkplaceClient, beforeEnter: ifAuthenticated
    },
    {
        path: '/client/favourite', name: 'favourite', component: FavouriteClient, beforeEnter: ifAuthenticated
    },
    {
        path: '/client/categorykpilevel', name: 'categorykpilevel', component: CategoryKPILevelClient, beforeEnter: ifAuthenticated
    },
    {
        path: '/login', name: 'login', component: Login
    },
    {
        path: '/admin/account', name: 'account', component: AccountAdmin, beforeEnter: ifAuthenticated
    },
    {
        path: '/admin/accountlevel', name: 'accountleveladmin', component: AccountLevelAdmin, beforeEnter: ifAuthenticated
    },
    {
        path: '/admin/category', name: 'categoryadmin', component: CategoryAdmin, beforeEnter: ifAuthenticated
    }
    ,
    {
        path: '/admin/categorykpilevel', name: 'categorykpileveladmin', component: CategoryKPILevelAdmin, beforeEnter: ifAuthenticated
    },
    {
        path: '/admin/kpi', name: 'kpiadmin', component: KPIAdmin, beforeEnter: ifAuthenticated
    }
    ,
    {
        path: '/admin/kpilevel', name: 'kpileveladmin', component: KPILevelAdmin, beforeEnter: ifAuthenticated
    },
    {
        path: '/admin/level', name: 'leveladmin', component: LevelAdmin, beforeEnter: ifAuthenticated
    }
];

