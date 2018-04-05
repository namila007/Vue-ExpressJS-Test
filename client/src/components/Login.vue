<template>
<v-flex xs6 offset-xs3 >
<div class="white elevation-2">
  <v-toolbar flat dense class="cyan" dark>
  <v-toolbar-title>Login</v-toolbar-title>
  
  </v-toolbar>
  <form autocomplete="on">
    <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field
    v-model="email"
    label="E-mail"
    data-vv-name="email"
    required
  ></v-text-field>
  <v-text-field
    v-model="password"
    label="Password"
    type="password"
    data-vv-name="Password"
    required
  ></v-text-field>
      <!-- <input type="email" v-model="email" name="email" placeholder="email" autocomplete=false/>
      <br>
      <input type="password" v-model="password" name="password" placeholder="password"/>
      <br> -->
      <div v-html="error" class="error"/>
      <v-btn class="cyan" dark @click="login" >Login</v-btn>
      <br>
    </div>
  </form>
    <!-- <v-text-field
    v-model="email"
    label="E-mail"
    data-vv-name="email"
    required
  ></v-text-field>
  <v-text-field
    v-model="password"
    label="Password"
    data-vv-name="Password"
    required
  ></v-text-field>
  <button  @click="register">Register</button> -->
  
 
</div> 
</v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },methods: {
    async login(){
      try {
        this.error = ''
        const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
         console.log(response.data.token) 
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
          //console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }

    }
  },
}
</script>

<style scoped>
.error {
  color: red;
}


</style>
