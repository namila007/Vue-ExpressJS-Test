<template>
  <v-flex md7 xs6 offset-md3 offset-xs-3 offset-sm3 >
    <panel title='Add a Song'>
     
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Song Title"
      v-model="title"
      :rules="titleRules"
      required
    ></v-text-field>
    <v-text-field
      label="Artist"
      v-model="artist"
      :rules="artistRules"
    ></v-text-field>
    <v-text-field
      label="Album"
      v-model="album"
    ></v-text-field>
    <v-text-field
      label="Album Image Url"
      v-model="albumImageUrl"
    ></v-text-field>
    <v-text-field
      label="Youtube link"
      v-model="youtubeId"
    ></v-text-field>

    <v-btn
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
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
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Song Title is required'
      ],
      artist: '',
      artistRules: [
         v => !!v || 'Artist is required'
      ],
      album: '',
      albumImageUrl: '',
      youtubeId: ''
    }
  }),
  methods: {
     async submit () {
        if (this.$refs.form.validate()) {
          try {
        const res = await SongService.addSong({
          title: this.title,
          artist: this.artist,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeId: this.youtubeId
        })
        console.log(res)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }

}
</script>

<style scoped>

</style>
