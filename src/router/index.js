import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import About from '../views/AboutView.vue'
// This was commented out because I decided to use the lazy loading approach for the About page.

import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


// This is to display the About page. This is the Lazy loading approach.
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // Displaying the About page using Lazy loading approach.
    path: '/about-us',
    name: 'about',
    component: lazyLoad('AboutView')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:ic',
    // route parameter
    // This enables me to navigate through the different Jobs page using the id.
    name: 'JobDetails',
    component: JobDetails,
    props: true
    // Now the JobDetails page will be able to accept properties from anywhere.
    // This is because I want to send the route parameter(id) from the Jobs to this page as props.
  },
  {
    //Redirects
    //Incase Users go to a specific route with is currently not accessible due to some reasons.
    path: '/all-jobs',
    redirect: 'jobs'
    //Now if Users go to route ('all-jobs'), they will be redirected to route ('jobs').
  },
  {
    // To catch all route requests and direct them to a customized page (404). NotFound is the name of the 404 page here. so "/:catchAll(.*)" is the thing to use.
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
