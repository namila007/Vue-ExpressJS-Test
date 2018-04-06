<template>
  <v-container>
    <panel title="Songs">
      <div v-for="song in songs" :key="song.title">
        {{song.title}}
        {{song.artist}}
        {{song.album}}
      </div>
    </panel>
  </v-container>
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
    this.songs = await SongService.index()
  }
}
</script>

<style scoped>

</style>
