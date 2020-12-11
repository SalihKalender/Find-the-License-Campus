<template>
  <div id="app">
      <transition name="leftright" mode="out-in">
        <component :is="Solv"></component>
      </transition>
  </div>
</template>

<script>

//todo: Simdi sen eger win'se farklı transition , lose ise farklı bir transition yapacaksın

import gameCards from './components/gameCards'
import win from './components/win'
import lose from './components/lose'

import { EventBus } from './main'

export default {
  name: 'App',
  components: {
    gameCards,
    win,
    lose
  },
  data() {
    return {
      Solv: "gameCards"
    }
  },
  methods: {

  },
  computed: {

  },
  created() {
    EventBus.$on("compName",(compName)=>{
      if(compName == 'win' || compName == 'lose') {
        this.Solv = compName;
      }
      else {
        this.Solv = "gameCards";
      }
    })
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
  }
  body {
    overflow-x: hidden;
  }
  .leftright-enter-active {
    animation-name: leftright;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
  }
  .leftright-leave-active {
    animation-name: rightleft;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
  }
  @keyframes leftright {
    from {
      opacity: 0;
      transform: translateX(-1000px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes rightleft {
    from {
      opacity: 1;
      transform: translateX(0px);
    }
    to {
      opacity: 0;
      transform: translateX(1000px);
    }
  }  
</style>
