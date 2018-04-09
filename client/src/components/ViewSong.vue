<template>
<v-layout>
  <v-flex md7 offset-md3>
    <panel title="Song">
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
          </v-layout>
        </v-flex>
        <v-flex xs4 md4 >
          <div class="song.image">
            <v-spacer></v-spacer>
           <img class="album-img" :src="song.albumImageUrl"/>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex offset-md2 offset-xs2 md3 xs3>
            <v-btn v-on:click="edit(song.id)" >
              <v-icon>edit</v-icon>
            Edit Song
            </v-btn>
          </v-flex>
      </v-layout>
    </panel>
  </v-flex>
</v-layout>
</template>

<script>
import panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  components: {
    panel
  }, 
  methods: {
    edit  (val) {
      console.log(val)
      this.$router.push({
        name: 'editsong', 
        params: {
          songId: val
        }
      })
    }
    

  }, data () {
    return {
       song: null 
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    const song = await SongService.getSongbyId(songId)
    // console.log(song.data)
    this.song = song.data 
  }
}
</script>

<style scoped>
.song-image {
  width: 70%;
  height: 70%;
}
</style>
