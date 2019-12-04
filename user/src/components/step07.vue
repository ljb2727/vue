<template>
  <div class="section mx-2">
    <v-container fluid class="pa-0 mb-6">
      <!-- {{checkbox1}} -->
      <input type="hidden" id="checkbox1" :value="checkbox1">
      <v-checkbox
        v-for="item in items" :key="item.key"
        :label="item.label"
        :value="item.value"
        v-model="checkbox1"
        return-object
        hide-details
      ></v-checkbox>
    </v-container>

    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음7</v-btn>

  </div>
</template>
<script>
  export default {
    props: ['userData'],
    data (){
      return{
        items:[
          {value: 'c1', label: '그린피 9만원 이하'},
          {value: 'c2', label: '그린피 10만원 ~ 14만원'},
          {value: 'c3', label: '그린피 15만원 이상'},
          {value: 'c4', label: '야간라운드 가능 골프장'},
          {value: 'c5', label: '1박 2일 하기 좋은 골프장'},
          {value: 'c6', label: '해외 골프여행 선호 골퍼'},
          {value: 'c7', label: '조인라운드 선호 골퍼'},
          {value: 'c8', label: '주중 골퍼'},
          {value: 'c9', label: '주말 골퍼'},
        ],
        isDisabled: false,
        checkbox1: []
      }
    },
    methods: {
      send: function(){
        this.userData.checkbox1 = this.checkbox1
        this.$emit('send','finished',this.userData)
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
