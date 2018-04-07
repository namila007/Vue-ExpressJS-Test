<template>
    <v-flex   >
  <div class="white elevation-2 fluid">
    <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <slot name="button"/>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        NO CONTENT
      </slot>
    </div>
  </div> 
  </v-flex>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
