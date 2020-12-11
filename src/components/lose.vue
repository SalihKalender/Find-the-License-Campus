<template>
    <div class="losecont">
        <div class="cont">
            <h4 v-center> <span v-color="'9a0000'"> Malesef </span> Bilemediniz !!! </h4>
            <div class="buttoncont">
                <button type="button" class="losebtn" @click="newGame"> Yeni Oyun </button>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../main'

export default {
    methods: {
        newGame() {
            EventBus.gonderComp("gameCards");
            EventBus.CevapSifirla();
        }
    }
}
</script>

<style>
.losecont {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.losebtn {
  background: rgb(245,96,112);
  background: linear-gradient(90deg, rgba(245,96,112,1) 0%, rgba(208,7,7,1) 100%);
  padding: 15px 30px;
  font-size: 17px;
  border: none;
  border-radius: 10px;
  color: #fff;
}
</style>