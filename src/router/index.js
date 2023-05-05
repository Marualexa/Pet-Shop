import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', name: 'home', component: () => import('@/components/Navegacion/HomeMain.vue') },
   { path: '/product/:id', name: 'DetalleProduct', component: () => import('@/components/ProductFolder/DetalleProduct.vue') },
   { path: '/addItems', name: 'addItem', component: () => import('@/components/ProductFolder/AddItems.vue') },
   { path: '/edictProduct/:id', name: 'edictProduct', component: () => import('@/components/ProductFolder/EdictProduct.vue') },
   { path: '/cartDetail', name: 'cartDetail', component: () => import('@/components/CartFolder/CartDetail.vue') },
   { path: '/ordenConfirm/:id', name: 'ordenConfirm', component: () => import('@/components/CartFolder/ConfirmCom.vue') },
   { path: '/orderReady/:id', name: 'orderReady', component: () => import('@/components/CartFolder/orderReady.vue') },
   { path: '/login', name: 'login', component: () => import('@/components/Navegacion/LoginInic.vue') },
   { path: '/registro', name: 'registro', component: () => import('@/components/Navegacion/RegistMain.vue') }
   ]
});

export default router