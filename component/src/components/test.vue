<template>
  <div>
    {{message}}
    <button @click="chage">test click</button>
  </div>
</template>
<script>
export default {
  data (){
    return {
      message: 'test'
    }
  },
  methods: {
    chage: function(){
      this.message = '바꿨다'
    }
  }
}
</script>
