import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/Intro';
import Movie from '@/components/Movie';
import MovieTrailer from '@/components/MovieTrailer';

Vue.use(Router);

export default new Router({
  routes: [
    { 
      path: '/', 
      component: Intro 
    },
    { 
      path: '/:id', 
      component: Movie 
    },
    { 
      path: '/:id/trailer', 
      component: MovieTrailer 
    },
  ],
});
