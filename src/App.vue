<template>
  <div class="background-image overflow-hidden">
  <div class="flex items-center justify-betweem flex-row px-24 h-screen w-screen">
    <card 
    v-for="cardProperties in cardPropsArray"
    v-bind:key="cardProperties.text"
    :cardProperties = cardProperties
    @call-method="run"
    />
  </div>
</div>
<div class="bg-background-color overflow-hidden flex flex-col justify-center items-center">
    <information
    v-for="informationProperties in infoPropsArray"
    v-bind:key="informationProperties.text"
    :informationProperties= informationProperties
    />
</div>
</template>

<script>
import '../tailwind.config'
import card from './components/card.vue'
import information from './components/information.vue'

export default {
  name: 'App',
  components: {
    card,
    information,
  },
  data(){
    return{
      cardPropsArray:[
      {
          scrollFunction: "musicScroll",
          title: "Musik",
          icon: "fa-solid fa-music",
          text: "/play"
        },
        {
          scrollFunction: "maoScroll",
          title: "Med Andra Ord",
          icon: "fa-solid fa-hourglass-end",
          text: "/MAO"
        },
        {
          scrollFunction: "ubScroll",
          title: "Ultimate Bravery",
          icon: "fa-solid fa-wheelchair-move",
          text: "/ub"
        },
        {
          scrollFunction: "rollScroll",
          title: "Roll",
          icon: "fa-solid fa-dice",
          text: "/roll"
        },
        {
          scrollFunction: "mqScroll",
          title: "Musik Quiz",
          icon: "fa-solid fa-volume-high",
          text: "/mq"
        },
        {
          scrollFunction: "ballScroll",
          title: "8ball",
          icon: "fa-solid fa-bowling-ball",
          text: "/8ball"
        },
        {
          scrollFunction: "otherScroll",
          title: "Övriga funktioner",
          icon: "fa-solid fa-robot",
          text: "Alla mindre funktioner"
        },
      ],
      infoPropsArray: [
        {
          icon: "fa-solid fa-music",
          title: "Musik",
          id:"music"
        },
        {
          icon: "fa-solid fa-hourglass-end",
          title: "Med andra ord",
          id: "mao"
        },
        {
          icon: "fa-solid fa-wheelchair-move",
          title: "Ultimate Bravery",
          id:"ub"
        },
        {
          icon: "fa-solid fa-dice",
          title: "Roll",
          id:"roll"
        },
        {
          icon: "fa-solid fa-volume-high",
          title: "Musik Quiz",
          id:"mq"
        },
        {
          icon: "fa-solid fa-bowling-ball",
          title: "8ball",
          id:"8ball"
        },
        {
          icon: "fa-solid fa-robot",
          title: "Övriga funktioner",
          id:"other"
        },
      ]
    }
  },
  methods:{
    run(funcName){
      this[funcName]();
    },
    
    funcName: [
      {
        musicScroll: "musicScroll",
        maoScroll: "maoScroll",
        ubScroll: "ubScroll",
        rollScroll: "rollScroll",
        mqScroll: "mqScroll",
        ballScroll: "ballScroll",
        orhterScroll: "otherScroll",
      }
    ],
    musicScroll() {
      const musicDiv = document.getElementById("music");
      if(musicDiv != null){
        musicDiv.scrollIntoView({behavior: 'smooth'})
      }
    },
      maoScroll() {
        const maoDiv = document.getElementById("mao");
        if(maoDiv != null){
          maoDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
      ubScroll() {
        const ubDiv = document.getElementById("ub");
        if(ubDiv != null){
          ubDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
      rollScroll() {
        const rollDiv = document.getElementById("roll");
        if(rollDiv != null){
          rollDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
      mqScroll() {
        const mqDiv = document.getElementById("mq");
        if(mqDiv != null){
          mqDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
      ballScroll() {
        const ballDiv = document.getElementById("8ball");
        if(ballDiv != null){
          ballDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
      otherScroll() {
        const otherDiv = document.getElementById("other");
        if(otherDiv != null){
          otherDiv.scrollIntoView({behavior: 'smooth'})
        }
      },
  },
}
</script>

<style src="./styles/app.css"/>

<style scoped>
.background-image{
  background-image: url("../images/Gulflogga.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>