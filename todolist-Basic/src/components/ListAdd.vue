<template>
  <div>
    <v-textarea
      outline
      v-model="memo"
      label="label"
      no-resize
      value=""
    ></v-textarea>
    <v-btn v-if="mode === 'add'" @click="listAdd">완료</v-btn>
    <v-btn v-else @click="listEdit">수정</v-btn>
  </div>
</template>
<script>
import { eventBus } from "../main"
export default {
  name: "",
  data (){
    return {
      memo: null,
      index: null,
      mode:"add"
    }
  },
  created() {
    eventBus.$on('listEdit',(memo, index) => {
      console.log(memo, index)
      this.memo = memo
      this.index = index
      this.mode = "edit"
    })
  },
  methods: {
    listAdd() {
      if(this.memo !== null){
        this.$emit("listAdd", this.memo, new Date());
        this.memo = null
      }else {
        alert("메모 입력")
      }
    },
    listEdit() {
      if(this.memo !== null){
        this.$emit("listEdit", this.memo, this.index);
        this.memo = null
        this.mode = "add"
      }else {
        alert("메모 입력")
      }
    }
  }
}
</script>
