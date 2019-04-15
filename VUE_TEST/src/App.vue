<template>
  <v-app>
    <v-toolbar class="deep-purple">
       <v-toolbar-title>Vuetify Tutorial</v-toolbar-title>
       <v-toolbar-items>
               <v-btn flat dark>Vue</v-btn>
               <v-btn flat dark>Vuex</v-btn>
               <v-btn flat dark>Nuxt</v-btn>
             </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>