import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', name: 'home', component: () => import('../components/HomeMain.vue') },
   { path: '/product/:id', name: 'DetalleProduct', component: () => import('../components/DetalleProduct.vue') },
   { path: '/addItems', name: 'addItem', component: () => import('../components/AddItems.vue') },
   { path: '/edictProduct/:id', name: 'edictProduct', component: () => import('@/components/EdictProduct.vue') },
   { path: '/cartDetail', name: 'cartDetail', component: () => import('@/components/CartDetail.vue') },
   { path: '/ordenConfirm', name: 'ordenConfirm', component: () => import('@/components/ConfirmCom.vue') },
   { path: '/orderReady', name: 'orderReady', component: () => import('@/components/orderReady.vue') },
   ]
});

export default router