
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
  import Dashboard from './components/profile/Dashboard.vue';
  import companyFiles from './components/profile/companyFiles.vue';
  import SendRequest from './components/profile/SendRequest.vue';
  import fileupload from './components/profile/fileupload.vue';



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
          component: Billings
        },
        {
          path: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'companyFiles',
          component: companyFiles
        },
        {
          path: 'SendRequest',
          component: SendRequest
        },
        {
          path: 'fileupload',
          component: fileupload
        },
      ]
  },
  { path:'/fnf', component:fnf },
  { path:'*', redirect: '/'},

]