<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <router-view></router-view>

      <div class="hero-foot">
        <div class="columns is-mobile">
          <div v-for="movieChoice in movieChoices" class="column">
            <router-link :to="`/${movieChoice.id}`" tag="li" class="movie-choice">
              <i :class="[{ 'fa fa-check-circle favorite-check': movieChoice.favorite }]" aria-hidden="true"></i>
              <img :src="`${movieChoice.smallImgSrc}`" class="desktop" />
              <p class="mobile movie-title">{{ movieChoice.subtitle }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <p class="appreciation-tag">
      Inspired by @makv25's <a href="https://dribbble.com/shots/3720358-Daily-Ui-025-TV-app" target="_blank">daily dribble</a>
    </p>
    <a href="https://twitter.com/djirdehh" target="_blank" class="twitter-section">
      <i class="fa fa-twitter-square" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
import { MOVIES } from './assets/mock/movies'

export default {
  name: 'app',
    data () {
    return {
      movieChoices: MOVIES
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
