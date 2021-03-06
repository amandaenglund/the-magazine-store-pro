Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('member-page', MemberPageComponent);
Vue.component('admin-page', AdminPageComponent);

Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);
Vue.component('meny', MenuComponent);
Vue.component('shipping', ShippingComponent);
Vue.component('payment', PaymentComponent);
Vue.component('product-admin', ProductAdminComponent);
Vue.component('search', SearchComponent);

const http = axios; // using axios 3rd party XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products', component: ProductPageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/member', component: MemberPageComponent },
    { path: '/admin', component: AdminPageComponent }
  ]
});

// the app
let app = new Vue({
  el: "#app",
  router // add the router to the app
});
