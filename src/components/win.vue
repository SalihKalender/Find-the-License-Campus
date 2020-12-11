<template>
    <div class="wincont">
        <div class="cont">
            <h4 v-center> <span v-color="'149414'"> Tebrikler </span> Bildiniz !!! </h4>
            <div class="buttoncont">
                <button type="button" class="winbtn" @click="newGame"> Yeni Oyun </button>
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
    .wincont {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
    }
    .cont {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 25px;
    }
    .winbtn {
        background: rgb(103,245,96);
        background: linear-gradient(90deg, rgba(103,245,96,1) 0%, rgba(8,140,25,1) 100%);
        padding: 15px 30px;
        font-size: 17px;
        border: none;
        border-radius: 10px;
        color: #fff;
    }
</style>