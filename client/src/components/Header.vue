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
    </v-toolbar-items>
    <v-spacer/>
    <v-toolbar-items>
        <v-btn flat dark href="#/login">
          Login
        </v-btn>
        <v-btn flat dark href="#/register">
          SignUp
        </v-btn>
    
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>


</style>
