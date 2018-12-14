
import home from './components/home.vue';
import faq from './components/faq.vue';
  import Geleral from './components/faq/Geleral.vue';
  import Billing from './components/faq/Billing.vue';
  import BusinessUsers from './components/faq/BusinessUsers.vue';
  import FreeUsers from './components/faq/FreeUsers.vue';
import fnf from './components/fnf.vue';

import profile from './components/profile.vue';
  import mainprofile from './components/profile/mainprofile.vue';
  import team from './components/profile/team.vue';
  import Billings from './components/profile/Billings.vue';



export const routers=[
	{ path:'/', component:home },
	{ path:'/faq/:id', component:faq , children: [
        { path: '', component: Geleral },
        {
          path: 'Billing',
          component: Billing
        },
        {
          path: 'BusinessUsers',
          component: BusinessUsers
        },
        {
          path: 'FreeUsers',
          component: FreeUsers
        }
      ]
  },
  { path:'/profile/:id', component:profile , children: [
        { path: '', component: mainprofile },
        {
          path: 'team',
          component: team
        },
        {
          path: 'Billing',
          component: BusinessUsers
        },
      ]
  },
  { path:'/fnf', component:fnf },
  { path:'*', redirect: '/'},

]