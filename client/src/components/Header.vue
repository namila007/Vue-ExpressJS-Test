<template>
  <v-toolbar fixed class="cyan" dark>
    
    <v-toolbar-side-icon>
    </v-toolbar-side-icon>
    
    <v-toolbar-title class="mr-4" >
      TabTracker
    </v-toolbar-title>
    
  <v-toolbar-items>
    <v-btn flat dark :to="{
      name: 'songs'
      }" exact>
      Browse
    </v-btn>
    </v-toolbar-items >
    <v-spacer/>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLogged" flat dark to='/login' exact-active-class>
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLogged" flat dark to='/register' exatct>
          SignUp
        </v-btn>
        <v-btn @click=signout v-if="$store.state.isUserLogged" flat dark >
          Logout
        </v-btn>
    
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    async signout(){
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'root'
        })
      } catch (err){

      }
    }
  }
}
</script>

<style scoped>
  

</style>
