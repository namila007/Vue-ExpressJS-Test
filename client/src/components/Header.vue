<template>
  <v-toolbar fixed class="cyan" dark>
    
    <v-toolbar-side-icon>
    </v-toolbar-side-icon>
    
    <v-toolbar-title class="mr-4" >
      TabTracker
    </v-toolbar-title>
    
  <v-toolbar-items>
    <v-btn flat dark>
      Browse
    </v-btn>
    </v-toolbar-items >
    <v-spacer/>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLogged" flat dark href="#/login">
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLogged" flat dark href="#/register">
          SignUp
        </v-btn>
        <v-btn @click=signout v-if="$store.state.isUserLogged" flat dark href="#/login">
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
      } catch (err){

      }
    }
  }
}
</script>

<style scoped>
  

</style>
