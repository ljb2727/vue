<template>
  <div class="section mx-2">
    <v-text-field
      v-model="userId"
      label="아이디를 입력해주세요."
      prepend-icon="face"
      clearable
    ></v-text-field>

    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음3</v-btn>
  </div>
</template>
<script>
  export default {
    props: ['userData'],
    data (){
      return{
        isDisabled: true,
        userId:null,
      }
    },
    watch: {
      userId: function(val){
        //console.log('new: %s, val)
        if(val !== null){
          val.length >= 1 ? this.isDisabled = false : this.isDisabled = true
        }else{
          this.isDisabled = true
        }
      }
    },
    methods: {
      send() {
        this.userData.userId = this.userId
        this.$emit('send',4,this.userData)
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
