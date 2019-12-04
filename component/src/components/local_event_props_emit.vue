<template>
  <div>
    <hr>
    {{fromParent}}
    <br>
    {{say}}
    <br>
    <button @click="send()">from child</button>
    <hr>
  </div>
</template>
<script>
export default {
  //부모에게 넘겨받은 formParent
  //props: ['formParent'],
  props: {
    //부모에게 넘겨받은 값의 데이터 타입
    //formParent: String //String, Object ..
    fromParent: {
      type: String,
      required: false, //부모에서 값을 못 받으면 error
      default: 'base'

    }
  },
  data (){
    return {
      child:'ckckckck'
    }
  },
  methods: {
    send() {
      this.$emit('print')
    }
  },
  computed:{
    say(){
      return this.fromParent + "ㄱㄱ"
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
