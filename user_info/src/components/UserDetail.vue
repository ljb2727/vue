<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{name}}</p>
    <p>{{address}}</p>
    <p>{{phone}}</p>
    <p>{{hasDogKr}}</p>
    {{getDateAndTime(editedDate)}}
  </div>
</template>
<script>
import { eventBus } from "../main"
import { dateFormat } from "../mixins/dateFormat"
export default {
  props:['name','address','phone','hasDog'],
  data(){
    return {
      editedDate: null
    }
  },
  computed:{
    hasDogKr(){
      return this.hasDog === true ? '있' : '없'
    }
  },
  created() {
    //do something after creating vue instance
    eventBus.$on('userWasEdited',(date)=>{
      this.editedDate = date
    })
  },
  methods: {
    // getDateAndTime(date){
    //   if (date !== null) {
    //     let hour = date.getHours()
    //     let minutes = date.getMinutes()
    //     let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    //     return `${fullDate} ${hour}:${minutes}`
    //   }else{
    //     return null
    //   }
    // }
  },
  mixins: [ dateFormat ]
}
</script>
