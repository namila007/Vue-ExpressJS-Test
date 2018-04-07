<template>
  
    <v-flex  column offset-xs2 offset-md2 xs8 md8>
      
    <panel title="Songs">
      
        <v-btn
          class="cyan accent-2 elevation-10"
          light
          absolute
          right
          middle
          fab
          medium
          to='/songs/addsong'
          slot="button" > 
          <v-icon>add</v-icon>
        </v-btn>
      <div v-for="song in songs" :key="song.id">
        <v-spacer></v-spacer>
        <v-layout>
        <v-flex xs6 md6 centered>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-album">
           {{song.album}}
          </div>
          <v-layout class="row">
          <v-flex xs1 md1 offset-md2 offset-xs2>
            <v-btn :href="song.youtubeId" class="red " >
            <i class="material-icons">music_video</i>
            </v-btn>
          </v-flex>
          <v-flex offset-md4 offset-xs4>
            <v-btn  class="green round" v-on:click="viewsong(song.id)" >
            <i class="material-icons">library_music</i>
            </v-btn>
          </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs4 md4 >
          <div class="song.image">
            <v-spacer></v-spacer>
           <img class="album-img" :src="song.albumImageUrl"/>
          </div>
        </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-divider/>
        <v-spacer></v-spacer>
      </div>
    </panel>
    </v-flex>
    
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  components: {
    Panel
  },
  data () {
    return {
      // array
      songs: null
      
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  } ,
  methods: {
     viewsong(val) {
       console.log(val)
       this.$router.push({
         name: 'viewsong',
         params: {
           songId: val
         }
       })
    }
  }
}
</script>

<style scoped>
.album-img {
  width: 60%;
  margin: 0 auto;
}
.song-title {
  font-size: 30px;
  font-style: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.song-artist {
  font-size: 20px;
  font-style: bold;
}
.song-album {
  font-size: 16px;
  font-style: bold;
}
</style>
