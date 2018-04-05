<template>
  <panel title="Login">
    <form autocomplete="on">
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
    <div v-html="error" class="error"/>
    <v-btn class="cyan" dark @click="login" >Login</v-btn>
    <br>
    </form>
  </panel>
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
  components: {
    panel
  }
}
</script>

<style scoped>



</style>
