<template>
<div :class="[{ 'favorite-shadow': selectedMovie.favorite }, 'hero-body']" :style="{ 'background-image': selectedMovie.largeImgSrc }">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </a>
              <router-link to="/" class="nav-item is-active">
                Home
              </router-link>
              <a class="nav-item is-active">
                <span class="tag is-rounded">
                Films
                </span>
              </a>
              <a class="nav-item is-active">
                Shows
              </a>
              <a class="nav-item is-active">
                Music
              </a>
            </div>
            <div class="nav-right desktop">
              <span class="nav-item">
                <router-link to="/"  class="title">
                  VueFlix
                </router-link>
              </span>
            </div>
          </div>
        </header>
        <div class="container description-container">
          <div class="columns">
            <div class="column is-three-quarters">
              <h1 class="title">
                {{ selectedMovie.title }}
              </h1>
              <h4 class="subtitle">
                <p class="subtitle-tag">{{ selectedMovie.duration }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.genre }} |</p>
                <p class="subtitle-tag">{{ selectedMovie.releaseDate }}</p>
              </h4>
              <p class="description">{{ selectedMovie.description }}</p>
              <div class="links">
                <router-link :to="{path: '/' + $route.params.id + '/trailer'}" class="button play-button">Play <i class="fa fa-play"></i></router-link>
                <a class="button is-link favorites-button" @click="addToFavorites(selectedMovie)">
                  <span :class="[{ 'hide': selectedMovie.favorite }]">Add to</span><span :class="[{ 'hide': !selectedMovie.favorite }]">Remove from </span>&nbsp;favorites <i class="fa fa-plus-square-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { MOVIES } from '../assets/mock/movies'
export default {
  name: 'Movie',
  data () {
    return {
      selectedMovie: MOVIES[this.$route.params.id]
    }
  },
  watch: {
    $route () {
      this.selectMovie()
    }
  },
  methods: {
    selectMovie () {
      this.selectedMovie = MOVIES[this.$route.params.id]
    },
    addToFavorites (selectedMovie) {
      MOVIES[this.$route.params.id].favorite = !MOVIES[this.$route.params.id].favorite
    }
  },
};
</script>