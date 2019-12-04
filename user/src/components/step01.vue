<template>
  <div class="section mx-2 on">

    <v-text-field
    v-mask="mask"
    v-model="phoneNumber"
    label="전화번호를 입력해주세요."
    prepend-icon="phone_iphone"
    clearable
    type="tel"
    ></v-text-field>
    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()" >다음1</v-btn>
  </div>

</template>
<script>
  import { mask } from 'vue-the-mask'

  export default {
    props: ['userData'],
    directives: {
      mask,
    },
    data (){
      return{
        isDisabled: true,
        maxlength:13,
        phoneNumber:null,
        mask: '###-####-####',
        count: 0
      }
    },
    watch: {
      phoneNumber: function(val){
        //console.log('new: %s, val)
        if(val !== null){
          val.length === this.maxlength ?  this.isDisabled = false : this.isDisabled = true
        }else{
          this.isDisabled = true
        }
      }
    },
    methods: {
      send() {
        this.userData.phoneNumber = this.phoneNumber;
        this.$emit('send',2,this.userData);
      },
    },
  }
</script>
<style lang="scss" scoped>
</style>
