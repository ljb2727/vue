<template>
  <div id="">
    <v-card
      class="pa-3 pb-5 mb-2"
      :class="{'done': todo.status === 'done'}"
      v-for="(todo, index) in todolist.filter(e => e.status !== 'delete')"
      :key="index"
    >
      <p>{{todo.memo}} {{todo.status}} {{index}}</p>
      <v-btn
        v-if="todo.status === 'created'"
        @click="$emit('statusControl',index,'done')"
        icon flat small color="blue"
      >
        <i class="fas fa-check"></i>
      </v-btn>

      <v-btn
        v-else
        @click="$emit('statusControl',index,'created')"
        icon flat small color="green"
      >
        <i class="fas fa-redo-alt"></i>
      </v-btn>

      <v-btn
        @click="$emit('listDelete',index)"
        icon flat small color="red"
      >
        <i class="fas fa-trash-alt"></i>
      </v-btn>

      <v-btn
        @click="listEdit(todo.memo, index)"
        v-if="todo.status === 'created'"
        icon flat small color="yellow"
      >
        <i class="fas fa-edit"></i>
      </v-btn>

      <v-footer absolute class="pa-1">
        {{dateFormat(todo.date)}}
      </v-footer>

    </v-card>
  </div>
</template>
<script>
import { eventBus } from "../main"
export default {
  props: ['todolist'],
  data (){
    return {
        date: null
    }
  },
  methods:{
    listEdit(memo, index){
      eventBus.listEdit(memo, index)
    },
    dateFormat(date){
      var mo = date.getMonth()
      var d = date.getDate()
      var h = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
      var dateType = mo+"/"+d+" "+h+":"+m+":"+s
      return dateType.replace(/\d+/g,function(e){
        return e.length == 1 ? "0"+e : e;
      })
    }
  },
}
</script>
<style scoped>
.done{
  background-color: rgba(0,0,0,0.1);
}
.done p{
  text-decoration: line-through;
  color: rgba(0,0,0,0.5)
}
</style>
