<template>
  <div class="bg-color-background-color">
  <div class="flex flex-wrap justify-between items-center bg-background-color w-screen">
    <card 
    v-for="cardProperties in cardPropsArray"
    v-bind:key="cardProperties.text"
    :cardProperties = cardProperties
    />

  </div>
</div>
</template>

<script>
import '../tailwind.config'
import card from './components/card.vue'

export default {
  name: 'App',
  components: {
    card
  },
  data(){
    return{
      cardPropsArray:[
        {
          title: "Musik",
          text: "/play"
        },
        {
          title: "Med Andra Ord",
          text: "/MAO"
        },
        {
          title: "Ultimate Bravery",
          text: "/ub"
        },
        {
          title: "Roll",
          text: "/roll"
        },
        {
          title: "Musik Quiz",
          text: "/mq"
        },
        {
          title: "8ball",
          text: "/8ball"
        },
      ]
    }
  }
}
</script>

<style src="./styles/app.css"/>