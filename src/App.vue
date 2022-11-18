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
          text: "/mao"
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
          text: "/timer, /exit..."
        },
      ],
      infoPropsArray: [
        {
          cmdTitle1: "/play",
          cmdText1: "skriv antingen in sökord eller en url. Om du använder sökord så söker botten på youtube och spelar topresultatet, om du använder url spelas låten som url:en tillhör (kan vara både youtube och soundcloud)",
          cmdTitle2: "/pause",
          cmdText2: "pausar låten som spelas",
          cmdTitle3: "/skip",
          cmdText3: "skippar låten som spelas",
          cmdTitle4: "/queue",
          cmdText4: "visar alla låtar som ligger i kön",
          cmdTitle5: "/clear",
          cmdText5: "tömmer kön",
          cmdTitle6: "/resume",
          cmdText6: "startar musiken om den är pausad",
          icon: "fa-solid fa-music",
          title: "Musik",
          id:"music"
        },
        {
          cmdTitle1: "/mao",
          cmdText1: "Du får ett dm med 20 ord och en timer på 45 sekunder sätts igång. Reglerna kan du redan hoppas jag",
          icon: "fa-solid fa-hourglass-end",
          title: "Med andra ord",
          id: "mao"
        },
        {
          cmdTitle1: "/ub",
          cmdText1: "Botten skickar ett meddelande med en slumpmässig runepage, champion, ability och items",
          icon: "fa-solid fa-wheelchair-move",
          title: "Ultimate Bravery",
          id:"ub"
        },
        {
          cmdTitle1: "/roll",
          cmdText1: "Du skriver in ett nummer och får ett slumpmässigt nummer mellan 0 och ditt valda nummer",
          icon: "fa-solid fa-dice",
          title: "Roll",
          id:"roll"
        },
        {
          cmdTitle1: "/mq",
          cmdText1: "Botten spelar en låt i 5 sekunder, du har 20 sekunder på dig att gissa artist och låt. När du har gissat rätt på båda eller tiden går ut så visas svaren och du får starta en ny runda med samma command",
          icon: "fa-solid fa-volume-high",
          title: "Musik Quiz",
          id:"mq"
        },
        {
          cmdTitle1: "/8ball",
          cmdText1: "Du får svar på en ja/nej fråga",
          icon: "fa-solid fa-bowling-ball",
          title: "8ball",
          id:"8ball"
        },
        {
          cmdTitle1: "/timer",
          cmdText1: "En timer med din valda tid sätts igång",
          cmdTitle2: "/exit",
          cmdTitle3: "/restart",
          cmdText3: "Botten startas om (kan bara utföras av Körner)",
          cmdText2: "Botten lämnar vc",
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