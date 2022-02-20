import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFoundd from './components/notFound/NotFound.vue' ;
import TeamFooter from './components/footer/TeamFoooter.vue'
import UserFooter from './components/footer/UserFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/' ,
         redirect : '/teams '
      },
  
      {
          path: '/teams',
          components: {default : TeamsList  , footer : TeamFooter },
          alias: '/sexy' ,
          children:[
                     { path: ':teamId', component: TeamMembers, props: true , name:'teams-member'} ,
          ]
      }, 
  
      { 
        path: '/users',
        components: {default: UsersList , footer: UserFooter} ,
        beforeEnter(to , from , next) {
          // next(false)
          next()
        }
      },
  
      {
        path: '/:notFound(.*)' ,
        component:NotFoundd
      }
    ],
    linkActiveClass: 'active' ,
  
    scrollBehavior( _ , _2  , savedPosition ){
      if (savedPosition) {
        return savedPosition
      }
        return {top : 0 }
    } ,
  
  
  });
  //this code globally can block all the page totally !!!
  router.beforeEach(function (to , from , next) {  
    next()
  })


  export default router ; 