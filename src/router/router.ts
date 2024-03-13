import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import { useUserStore } from '../stores/userStore'
import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'
import MyOrdersView from '../views/MyOrdersView.vue'
import UsersView from '../views/UsersView.vue'
import { Roles } from '../types/enums'
import MyProfileView from '../views/MyProfileView.vue'
import SingleOrderView from '../views/SingleOrderView.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleUserView from '../views/SingleUserView.vue'
import SingleProductView from '../views/SingleProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      meta: { hideNavBar: true, requiresNotAuth: true }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: SingleUserView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/order/:id',
      name: 'order',
      component: SingleOrderView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/my-orders',
      name: 'myOrders',
      component: MyOrdersView,
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/my-profile',
      name: 'my-profile',
      component: MyProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: SingleProductView,
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  if (!userStore.sessionChecked) {
    await userStore.validateSession()
  }

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'auth' })
  }
  if (to.meta.requiresAdmin && userStore.user.role !== Roles.ADMIN) {
    next({ name: 'home' })
  }
  if (to.meta.requiresNotAuth && userStore.isLoggedIn) {
    next({ name: 'home' })
  }

  next()
})
export default router
