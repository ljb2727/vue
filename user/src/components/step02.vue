<template>
  <div class="section mx-2">
    <v-text-field
      v-model="userName"
      label="이름을 입력해주세요."
      prepend-icon="face"
      clearable
    ></v-text-field>

    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음2</v-btn>
  </div>
</template>
<script>
  export default {
    props: ['userData'],
    data (){
      return{
        isDisabled: true,
        userName:null,
      }
    },
    watch: {
      userName: function(val){
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
        this.userData.userName = this.userName
        this.$emit('send',3,this.userData);
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
