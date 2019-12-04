<template>
  <div class="section mx-2">
    <v-text-field
      v-model="place"
      label="거주지역을 선택해 주세요."
      prepend-icon="place"
      append-icon="mdi-map-search"
      readonly
      @click="dialog=true"
    ></v-text-field>

    <v-dialog v-model="mapLoading" fullscreen full-width>
      <v-container fluid fill-height style="background-color: rgba(255, 255, 255, 0.5);">
        <v-layout justify-center align-center>
          <v-progress-circular
            indeterminate
            color="primary">
          </v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>

    <v-radio-group row v-model="sex" :mandatory="false">
      <v-radio label="남성" value="male"></v-radio>
      <v-radio label="여성" value="female"></v-radio>
    </v-radio-group>

    <v-btn @click.stop="mapLoading = !mapLoading" color="button">{{mapLoading}}</v-btn>
    <v-btn @click.stop="">click</v-btn>
    <v-dialog
      v-model="dialog"
      max-width="99vw"
      max-height="99vh"
    >
      <v-toolbar dark color="primary">
        <v-toolbar-title class="ml-4">주소 입력</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false" :ripple="false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <h1 v-if="mapLoading">Yes</h1>
      <h1 v-else>No</h1>

      <VueDaumPostcode
        @complete="complete($event)"
        :animation="false"
        :no-shorthand="true"
        :zonecode-only="true"
        :theme="{
         //searchBgColor: '#0B65C8',
         //queryTextColor: '#FFFFFF',
        }"
      >
      </VueDaumPostcode>
    </v-dialog>


    <v-btn :disabled="isDisabled == true ? true : false" block bottom color="button" @click="send()">다음6</v-btn>

  </div>
</template>
<script>

  import { VueDaumPostcode } from "vue-daum-postcode"

  export default {
    components: {
      VueDaumPostcode
    },
    props: ['userData'],
    data (){
      return{
        mapLoading: false,
        isDisabled: true,
        place:null,
        result:null,
        sex:'male',
        dialog: false,
      }
    },
    watch: {
      place: function(val){
        //console.log('new: %s, val')
        if(val !== null){
          val.length >= 1 ? this.isDisabled = false : this.isDisabled = true
        }else{
          this.isDisabled = true
        }
      },
      mapLoading: function(val,old){
        console.log(`현재:${val}, 이전:${old}`)
      }
    },
    methods: {
      send() {
        this.userData.place = this.place;
        this.userData.sex = this.sex;
        this.$emit('send',7,this.userData)
      },
      complete(daum){
        this.place = daum.address;
        this.dialog = false;
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
