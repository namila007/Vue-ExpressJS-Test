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
            <v-flex >
              <v-btn :href="song.youtubeId" class="red " >
              <i class="material-icons">music_video</i>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout class="row">
            <v-flex>
            <v-btn 
              v-if="$store.state.isUserLogged && !this.bookmark"
              v-on:click="setbookmark(song.id)" >
              <v-icon>bookmark</v-icon>Bookmark
            </v-btn>
            <v-btn
              v-if="$store.state.isUserLogged && this.bookmark"
              v-on:click="unsetbookmark()" >
              <v-icon>bookmark</v-icon>Remove bookmark
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
import BookmarkService from '@/services/BookmarkService'
export default {
  components: {
    panel
  }, 
  methods: {
    edit  (val) {
      //console.log(val)
      this.$router.push({
        name: 'editsong', 
        params: {
          songId: val
        }
      })
    },
    async setbookmark(songId) {
      if (this.$store.state.isUserLogged) {
        const data = {
          SongId: songId
        }
        this.bookmark = (await BookmarkService.post(data)).data
        this.$router.push({
        name: "viewsong",
        params: {
          songId: this.$store.state.route.params.songId
        }
      })
      } else {
        console.log('log in')
      }
    },
    async unsetbookmark() {
      if (this.$store.state.isUserLogged) {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } else {
        console.log('log in')
      }
      this.$router.push({
        name: "viewsong",
        params: {
          songId: this.$store.state.route.params.songId
        }
      })
    }  
  }, data () {
    return {
       song: null,
       isBookmarked: false,
       bookmark: null
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    const song = await SongService.getSongbyId(songId)
    // console.log(song.data)
    this.song = song.data
    if (this.$store.state.isUserLogged) {
      const data1 = {
          songId: songId
        }
      this.bookmark = (await BookmarkService.index(data1)).data
    }

  }
}
</script>

<style scoped>
.album-img {
  width: 100%;
  margin: 0 auto;
}
.song-title {
  font-size: 30px;
  font-style: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
