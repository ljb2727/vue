<template>
<v-container>
  <v-layout row wrap>
    <v-flex xs12 text-xs-center>
      전체 : {{todolist.length}} / 완료 : {{done}} / 남은 : {{todolist.length - done}}
    </v-flex>
    <v-flex xs6 pa-2>
      <List
        :todolist = "todolist"
        @statusControl = "statusControl"
        @listDelete = "listDelete"
      />
    </v-flex>
    <v-flex xs6 pa-2>
      <ListAdd
        @listAdd="listAdd"
        @listEdit="listEdit"
      />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import List from "./List"
import ListAdd from "./ListAdd"
export default {
  components: {
    List,
    ListAdd
  },
  data (){
    return {
      todolist : [],
      date: null,
    }
  },
  computed: {
    done(){
      let count = 0
      this.todolist.forEach(e=>{
        if(e.status === 'done') count++
      });
      return count;
    }
  },
  methods: {
    listAdd(memo, date) {
      console.log('받음');
      this.todolist.push({memo: memo, status: "created", date: date })
    },
    listEdit(memo, index){
      this.todolist[index].memo = memo
    },
    statusControl(index,status){
      console.log(`${index},${status}`)
      this.todolist[index].status = status;
    },
    listDelete(index){
      this.todolist.splice(index,1);
    }
  }
}
</script>
