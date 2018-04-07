<template>
<v-flex xs5 md5 offset-xs4 align-center>
<panel title='Register'>
  <form autocomplete="off" name='tab-track'>
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
    autocomplete="new-password"
    data-vv-name="Password"
    required
  ></v-text-field>  
  <div v-html="error" class="error"/>
  <v-btn class="cyan" dark @click="register" >Register</v-btn>
  <br>
  </form> 
</panel>
</v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },methods: {
    async register(){
      try {
        this.error = ''
        const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        this.$store.dispatch('setToken', response.token)
        this.$store.dispatch('setUser', response.user)  
          //console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }

    }
  }, components: {
    panel
  }
}
</script>

<style scoped>


</style>
