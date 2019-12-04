<template>
<div class="vue_wrap">
  <v-app-bar app dense fixed scroll-off-screen >
    <v-btn icon class="ml-0" @click="stepBack">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title>회원 가입</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon class="mr-0" @click="close">
      <v-icon>mdi-window-close</v-icon>
    </v-btn>
  </v-app-bar>

  <v-content>
    {{userData}}
    <v-stepper
      v-model="step"
    >
      <v-stepper-header>
        <v-stepper-step
          editable
          :complete="step > 1"
          step="1"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          :complete="step > 2" step="2"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          :complete="step > 3" step="3"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          :complete="step > 4" step="4"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          :complete="step > 5" step="5"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          :complete="step > 6" step="6"
        ></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          step="7"
        ></v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <step01
            :userData="userData"
            @send="progress">
          </step01>
        </v-stepper-content>

        <v-stepper-content step="2">
          <step02
            :userData="userData"
            @send="progress">
          </step02>
        </v-stepper-content>

        <v-stepper-content step="3">
          <step03
            :userData="userData"
            @send="progress">
          </step03>
        </v-stepper-content>

        <v-stepper-content step="4">
          <step04
            :userData="userData"
            @send="progress">
          </step04>
        </v-stepper-content>

        <v-stepper-content step="5">
          <step05
            :userData="userData"
            @send="progress">
          </step05>
        </v-stepper-content>

        <v-stepper-content step="6">
          <step06
            :userData="userData"
            @send="progress">
          </step06>
        </v-stepper-content>

        <v-stepper-content step="7">
          <step07
            :userData="userData"
            @send="progress">
          </step07>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-content>

</div>
</template>
<script>
import step01 from "./step01"
import step02 from "./step02"
import step03 from "./step03"
import step04 from "./step04"
import step05 from "./step05"
import step06 from "./step06"
import step07 from "./step07"
export default {
  components: {
    step01,
    step02,
    step03,
    step04,
    step05,
    step06,
    step07,
  },
  data() {
    return {
      name: 'user',
      step: 0,
      userData:{},
    }
  },
  methods: {
    progress (step) {
      this.step = step;
    },
    stepBack (){
      console.log(this.step)
      if(this.step > 1){
        this.step = this.step - 1
      }else{
        console.log('history back')
      }
    },
    close (){
      console.log('close')
    }
  },
}
</script>
<style>
  .v-application{background:none !important;}
</style>
<style lang="scss">
.v-stepper{box-shadow: none !important}
.v-content {
    .v-btn {
        color: #fff !important;
    }
    .v-stepper__content{
      padding:24px 0 16px;
    }
}
.vue_wrap {
    height: 100vh;
}
.v-application .mx-2 {
    flex-grow: 1;
}
.v-toolbar__content,
.v-toolbar__extension {
    padding: 0 !important;
}
</style>
