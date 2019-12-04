<template>
  <v-app>
    <user></user>
  </v-app>
</template>
<script>
import user from "./components/user.vue"
import test from "@/assets/common.js"
export default {
  mounted() {
    test()
  },
  name: "App",
  data (){
    return {
    }
  },
  components: {
    user
  }
}
</script>
<style lang="scss" scoped>
</style>
