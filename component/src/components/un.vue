<template>
  <div>
    {{ccc}}
    <button type="button" name="button" @click="local_ccc">@@@</button>
  </div>
</template>
<script>
export default {
  data (){
    return {
      ccc:'로컬 컴포넌트 '
    }
  },
  methods: {
    local_ccc() {
      this.$emit('local_ccc')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
