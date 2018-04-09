<template>
  <v-flex md7 xs6 offset-md3 offset-xs-3 offset-sm3 >
    <panel title='Edit Song'>
     
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Song Title"
      v-model="song.title"
      required
    ></v-text-field>
    <v-text-field
      label="Artist"
      v-model="song.artist"
    ></v-text-field>
    <v-text-field
      label="Album"
      v-model="song.album"
    ></v-text-field>
    <v-text-field
      label="Album Image Url"
      v-model="song.albumImageUrl"
    ></v-text-field>
    <v-text-field
      label="Youtube link"
      v-model="song.youtubeId"
    ></v-text-field>

    <v-btn
      @click="submit"
    >
      submit
    </v-btn>
  </v-form>

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
  data: () => ({
    song: {
      id: '',
      title: '',
      artist: '',
      album: '',
      albumImageUrl: '',
      youtubeId: ''
    }
  }),
  methods: {
     async submit () {
      try {
        const res = await SongService.putSong(this.song)
        console.log(res)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
      }
    },
    async mounted () {
      const song = await SongService.getSongbyId(this.$store.state.route.params.songId)
      this.song =song.data 
    }

}
</script>

<style scoped>

</style>
