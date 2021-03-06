import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Category from "../pages/Category.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import slick from "../pages/slicker.vue";
import Cart from "../pages/Cart.vue";
import Signin from "../pages/Signin.vue";
import Signup from "../pages/Signup.vue";
import ForgotPassword from "../pages/ForgotPassword.vue";
// import Shop from '@/components/Shop.vue'
// import Product from '@/components/Product.vue'
// import Blog from '@/components/Blog.vue'
// import Post from '@/components/Post.vue'
// import Cart from '@/components/Cart.vue'
import Layout from "../components/Layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: Home,
          name: "Home"
        },
        {
          path: "category/:id/:name",
          component: Category,
          name: "Category"
        } ,
        {
          path: "product/:id/:name",
          component: ProductDetail,
          name: "product"
        },
        {
          path: "slick",
          component: slick,
          name: "slicker"
        },
        {
          path: "my-cart",
          component: Cart,
          name: "Giỏ hàng"
        }
        // {
        //   path: '/shop',
        //   component: Shop,
        //   name: 'Shop'
        // },
        // {
        //   path: '/product',
        //   component: Product,
        //   name: 'Product'
        // },
        // {
        //   path: '/blog',
        //   component: Blog,
        //   name: 'Blog'
        // },
        // {
        //   path: '/post',
        //   component: Post,
        //   name: 'Post'
        // },
        // {
        //   path: '/cart',
        //   component: Cart,
        //   name: 'Cart'
        // }
      ]

    },
    {
      path: "/sign-in",
      component: Signin,
      name: "Đăng nhập"
    },
    {
      path: "/sign-up",
      component: Signup,
      name: "Đăng ký"
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      name: "Quên mật khẩu"
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    }
  ]
});

export default router;
