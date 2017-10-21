<template>
    <div class="trailer-body" style="background: #1e1d1d">
      <div class="has-text-centered">
        <div class="columns">
          <div class="column vertical-align">
            <iframe
              allowFullScreen
              frameborder="0"
              height="376"
              :src="trailerUrlPath"
              style="width: 100%; min-width: 536px"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { MOVIES } from '../assets/mock/movies'
export default {
  name: 'MovieTrailer',
  data () {
    return {
      trailerUrlPath: MOVIES[this.$route.params.id].trailerPath
    }
  },
};
</script>