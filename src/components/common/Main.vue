<template>
  <div class="video_block" style="padding-top:120px;">
    <b-container class="bv-example-row main">
      <b-row>
        <b-col md="8">
          <div id="vue-core-video-player-box" class="example-player">
            <vue-core-video-player :cover="currentMovie.cover" :src="currentMovie.source"></vue-core-video-player>
          </div>
          <div class="movie-detail">
            <h1 class="title">{{currentMovie.title}}</h1>
            <div class="date">{{currentMovie.author}} - {{currentMovie.date}}</div>
            <div class="desc">{{currentMovie.desc}} </div>
          </div>
        </b-col>
        <b-col md="4" class="play-list">
          <!-- <v-virtual-scroll
            :item-height="50"
            height="300"
          > -->
          <div id="scrollspy-nested" style="position:relative; height:400px; overflow-y:auto">
            <h2>播放列表</h2>
            <MovieItem v-for="movie in movieList" :key="movie.cover" :item="movie"></MovieItem>
          </div>
          <!-- </v-virtual-scroll> -->
        </b-col>
      </b-row>
    </b-container>
  </div>


</template>

<script>

import MovieItem from './MovieItem.vue'
// import RecommendedItem from './Recommended.vue'
import DATA from '@/assets/data'

let movie = DATA[2]

if (location.search) {
  var vid = location.search.split('=')[1]
  DATA.forEach(item => {
    if (item.id === vid) {
      movie = item
    }
  })
}


export default {
  name: 'Main',
  components: {
    MovieItem,
    // RecommendedItem
  },
  data() {
    return {
      title: '',
      movieList: DATA,
      // recommendList: [DATA[2], DATA[4], DATA[1], DATA[0]],
      currentMovie: movie
    }
  },
  methods: {
    open() {
      window.open('https://github.com/core-player/vue-core-video-player-examples')
    }
  },
}
</script>

<style>
  .video_block{
    /* background-image: url("/images/燕窝/展示/10bdaa822c03d680ddf0c16e163b95ba.jpg"); */
    background-image:url('https://www.cincojotas.fr/media/wysiwyg/3-_-DEHESA.jpg')
  }
  .main{
    padding-top: 120px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .example-player {
    position: relative;
    height: 410px;
    background-color: #000;
    font-weight: normal;
  }
  .movie-detail{
    padding-top: 20px;
    color: rgba(0,0,0, .65);
  }
  .movie-detail h1{
    font-size: 20px;
    color: #000;
  }
  .movie-detail .date {
    font-size: 14px;
  }
  .movie-detail .desc {
    font-size: 13px;
    padding: 10px 20px 10px 0;
  }
  .movie-detail .btn-wrap {
    padding-right: 20px;
    text-align: right;
  }
  .play-list h2 {
    font-size: 18px;
    color: rgba(0,0,0, .85);
    padding-bottom: 10px;
  }
  .recommend-list {
    margin-top: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid #ddd;
  }
  .thanks {
    padding: 20px 0 40px;
    color: rgba(0, 0, 0, .25);
    font-size: 13px;
    text-align: center;
  }
  .recommend-list:after{
    content: '';
    display: block;
    clear: both;
  }
</style>
