import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
   { path: '/', name: 'home', component: () => import('../components/HomeMain.vue') },
   { path: '/product/:id', name: 'DetalleProduct', component: () => import('../components/DetalleProduct.vue') },
   { path: '/addItems', name: 'addItem', component: () => import('../components/AddItems.vue') },
   ]
});

export default router