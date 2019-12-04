show2<template>
  <div class="section mx-2">
    <v-text-field
      v-model="password"
      label="비밀번호를 입력해주세요."
      id = "pass1"
      prepend-icon="lock"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      @blur="checkPassword"
      clearable
    ></v-text-field>

    <transition name="transition">
      <v-text-field
        v-model="password2"
        label="비밀번호를 확인해주세요."
        id = "pass2"
        prepend-icon="lock"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        @blur="checkPassword"
        :error="error"
        @focus="error = false"
        clearable
        v-if="rePass"
      ></v-text-field>
    </transition>
    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음4</v-btn>

  </div>
</template>
<script>
  export default {
    props: ['userData'],
    data (){
      return{
        isDisabled: true,
        show1: false,
        show2: false,
        password: "",
        password2: "",
        rePass: false,
        error:false,
      }
    },
    watch: {
      password: function(val){
        console.log('pw1: %s pw2: %s', this.password, this.password2)
        if(val !== "" && this.password2 !== "" && val !== null && this.password2 !== null){
          if(this.password.length > 0 && this.password2.length > 0){
            this.isDisabled = false
          }else {
            this.isDisabled = true
          }
        }else{
          this.isDisabled = true
        }
        !this.password ? this.rePass = false : this.rePass = true;
      },
      password2: function(val){
        //console.log('new: %s, val)
        if(val !== "" && this.password1 !== "" && val !== null && this.password1 !== null){
          if(this.password.length > 0 && this.password2.length > 0){
            this.isDisabled = false
          }else {
            this.isDisabled = true
          }
        }else{
          this.isDisabled = true
        }
      }
    },
    methods: {
      send() {
        this.userData.password = this.password
        this.$emit('send',5,this.userData)
      },
      checkPassword: function(){
         if(this.password !== this.password2 && !!this.password2){
           this.error = true;
           this.password2 = "";
           setTimeout(()=>{this.error = false},500)
         }else {
           this.error = false
         }
      }
    },
  }
</script>
<style scoped>
.transition-enter-active {
   transition: all 0.3s ease;
 }
.transition-leave-active {
   transition: all 0s ease;
}
.transition-enter, .transition-leave-to{
   transform: translateX(10px);
   opacity: 0;
 }
</style>
