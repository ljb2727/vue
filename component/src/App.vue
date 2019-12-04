<template>
  <div id="app">
    <global></global>
    <global></global>
    <local-component/>
    <local-component/>
    <TestComponent/>
    <testg/>

    <hr><!-- ------------------ -->

    <p>parent name: {{parentName}}</p>
    <button @click="chageName()">xx</button>

    <!-- 자식에게 넘겨줄 값 fromParent 은 parentName 이다 -->
    <!-- @print 를 자식에게 넘겨받으면 printMessage 실행 -->
    <ChildComponent
      :fromParent="parentName"
      @print = "printMessage"
    ></ChildComponent>

    <!-- @local_ccc 를 자식에게 넘겨받으면 local_ccc 실행 -->
    <local @local_ccc = "local_ccc"></local>

  </div>
</template>

<script>
  import local from "./components/un"
  //컴포넌트를 불러오고
  import LocalComponent from "./components/local-component"
  import TestComponent from "./components/test"
  import ChildComponent from "./components/local_event_props_emit"
  export default {
    name: 'app',
    meta: {
      title: 'title chage'
    },
    //불러온 컴포넌트를 등록한다
    components: {
      LocalComponent,
      TestComponent,
      ChildComponent,
      local
    },
    //여기부터 이벤트 관련
    data (){
      return {
        parentName: '하하하',
      }
    },
    methods: {
      chageName (){
        this.parentName = 'XXX'
      },
      printMessage(){
        this.parentName = '하하하'
      },
      local_ccc(){
        this.parentName = '로컬로 부모 네임 첸'
      }
    }
  }
</script>
