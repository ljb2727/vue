<template>
  <div class="section mx-2">
    <v-text-field
      v-model="email"
      label="이메일를 입력해주세요."
      clearable
      prepend-icon="mail"
      @blur="emailRules"
      @focus="emailError=null"
      :error-messages = "emailError"
    ></v-text-field>

    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음5</v-btn>

  </div>
</template>
<script>
  export default {
    props: ['userData'],
    data (){
      return{
        isDisabled: true,
        email:null,
        emailError: null
      }
    },
    watch: {
      email: function(val){
        console.log('new: %s', val)
        if(val !== null){
          val.length >= 1 ? this.isDisabled = false : this.isDisabled = true
        }else{
          this.isDisabled = true
        }
      }
    },
    methods: {
      send() {
        this.userData.email = this.email
        this.$emit('send',6,this.userData)
      },
      emailRules() {
        if(this.email !==null && !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.email)){
          this.isDisabled = true
          this.emailError = '올바른 형식의 이메일이 아닙니다.'
        }else{
          this.emailError = null
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
