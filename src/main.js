import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const EventBus = new Vue({
  methods: {
    gonderComp(veri) {
      this.$emit("compName",veri);
    },
    CevapSifirla() {
      this.$emit("UserAnswer",Object);
    }
  }
})

Vue.directive('center',{
  bind(el) {
    el.style.textAlign = 'center';
  }
});

Vue.directive('color',{
  bind(el,binding) {
    el.style.color = '#' + binding.value;
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
