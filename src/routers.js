
import Vue from 'vue'
import Router from 'vue-router'

// layouts
import homeLayout from './components/layouts/mainLayout.vue';
import BusinessLayout from './components/layouts/adminLayout.vue';
// import BusinessLayout from './components/layouts/mainLayout.vue';
// import FreeLayout from './components/layouts/mainLayout.vue';


// components
import loginComp from '@/components/global/login'
import signupComp from '@/components/global/register'
import Confirm from '@/components/global/confirm_user'
import completeSignup from '@/components/global/signup_complete'



// super admin pages
import BDash from '@/components/profile/Dashboard'
import sendRequest from '@/components/profile/SendRequest'
import companyFiles from '@/components/profile/companyFiles'
import Team from '@/components/profile/team'
import UploadFiles from '@/components/profile/team'


import store from '@/store'


Vue.use(Router)

const router = new Router({  
  mode: 'history',
  routes: [
    { 
      path:'/', 
      name: 'home',
      components: {
        default: homeLayout
      },
      redirect: {name:'loginPage'},
      children: [
        {
          path: '',
          name: 'loginPage',
          component: loginComp,
          meta: {
            title: 'Paperdaz - Login Here'
          }
        },
        {
          path: '/signup',
          name: 'signupPage',
          component: signupComp,
          meta: {
            title: 'Paperdaz - Signup Here'
          }
        },
        {
          path: '/confirm',
          name: 'confirm_details',
          component: signupComp,
          meta: {
            title: 'Paperdaz - Signup Here'
          }
        },

        {
          path: '/verify-user/:token',
          name: 'confirm_user',
          component: Confirm,
          meta: {
            title: 'Paperdaz - User Confirmation'
          }
        },

      ]
    },

    {
      path: '/signup-complete/',
      name: 'signup-complete',
      component: completeSignup,
      meta: {
        title: 'Paperdaz - Signup Complete'
      }
    },

    {
      path: '/business/',
      name: 'dashboard',
      components: {default: BusinessLayout},
      redirect: {name:'business-dash'},
      meta: {requiresAuth: true},
      children: [
        {
          path: 'dashboard',
          component: BDash,
          name: 'business-dash',
          meta: {
            title: 'Paperdaz - Business User Dashboard'
          }
        },
        {
          path: 'upload-files',
          component: UploadFiles,
          name: 'upload-files',
          meta: {
            title: 'Paperdaz - Upload Business Files'
          }
        },
        {
          path: 'companyFiles',
          component: companyFiles,
          name: 'company-files',
          meta: {
            title: 'Paperdaz - Company Files'
          }
        },
        {
          path: 'sendRequest',
          component: sendRequest,
          name: 'send-request',
          meta: {
            title: 'Paperdaz - Send Request'
          }
        },
        {
          path: 'team',
          component: Team,
          name: 'team',
          meta: {
            title: 'Paperdaz - Business Team'
          }
        }
      ]
    },



    { path:'*', redirect: '/'},
    
  ]
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires authentiication, check if logged in
    // if not, redirect to login page.
    let fmsg = 'Please login to access this page'
    if (!store.state.user_mgt.sub.isLoggedIn) {
      
      next({
        name: 'loginPage',
        query: { redirectUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


export default router
