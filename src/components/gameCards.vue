<template>
    <div>
        <h2 v-center> Lisans Yerleşkesi Nerede </h2>
        <div>
            <transition-group appear name="rotate" class="container choises">
                <card
                v-for="choise in choises"
                :choise=choise
                :key="choise.id"
                @click.native="choisedChoise(choise.id)"
                :class="{ 'on-click' : UserAnswer == choise }"
                class="choisebox"></card>
            </transition-group>
        </div>
        <div>
            <transition name="opacity" mode="out-in" appear class="container">
                <component
                :is="answerSec"
                :choise=Answer
                :questImg="questionImage"
                @click.native="answered">
                </component> 
            </transition>
        </div>
    </div>
</template>

<script>
import card from './card';
import answer from './answer';

import { EventBus } from '../main'

export default {
    components: {
        card :card ,
        answer : answer
    },
    data() {
        return {
            choises: [
                {
                    id: 1,
                    name: 'Çubuklu'
                },
                {
                    id: 2,
                    name: 'Hazırlık'
                },
                {
                    id: 3,
                    name: 'Lisans'
                },
                {
                    id: 4,
                    name: 'Rektörlük'
                },
                {
                    id: 5,
                    name: 'Kavacık'
                },             
            ],
            UserAnswer : Object,
            Answer: null,
            questionImage: require("../../img/question.jpg"),
            answerSec: 'answer'
        }
    },
    methods: {
        choisedChoise(id) {
            if(this.UserAnswer.id == id) {
                this.UserAnswer = Object;
            }
            else {
                let choised;
                this.choises.forEach((choise)=>{
                    if(choise.id == id) {
                        choised = choise
                    }
                });
                this.UserAnswer = choised;
            }
        },
        answered() {
            this.answerSec = 'card';
            setTimeout(()=>{
                if(this.UserAnswer == Object) {
                alert("Lüften Bir Secenek Girin");
                }
                else if(this.UserAnswer == this.Answer) { 
                    EventBus.gonderComp("win");
                }
                else {
                    EventBus.gonderComp("lose");
                }
            },900)
        }
    },
    computed: {
        clicked() {
            return {
                'UserAnswer == choise' : 'on-click'
            }
        }
    },
    created() {
        this.choises.forEach((choise)=>{
            if(choise.name == 'Lisans') {
                this.Answer = choise;       //* choise'yi this.answer'a atar
            }
        });
        EventBus.$on("UserAnswer",(UserAnswer)=>{
            this.UserAnswer = UserAnswer;
        })
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;
    }
    .choisebox {
        width: 200px;
        height: 200px;
        margin: 20px;
        transition: box-shadow .4s;
    }
    .on-click {
        box-shadow: 0px 0px 37px 5px rgba(218,68,83,1);
        transition: box-shadow .4s;
    }
    .rotate-enter-active {
        animation-name: rotate;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-iteration-count: 2;
    }
    .rotate-leave-acive {
        animation-name: rotate;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-direction: alternate;
        animation-iteration-count: 2;
    }
    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotateY(720deg);
        }
    }
    .answer-image {
        width: 200px;
        height: 200px;
    }
    .opacity-enter {
        opacity: 0;
    }
    .opacity-enter-active {
        transition: opacity .7s;
    }
    .opacity-leave {
        transition: opacity .7s;
    }
    .opacity-leave-active {
        opacity: 0;
    }
</style>