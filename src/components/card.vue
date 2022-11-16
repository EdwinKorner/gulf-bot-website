<template>
    <div v-on:click="$emit('call-method',cardProperties.scrollFunction)" :id="cardProperties.id" class="flex text-text-color justify-around text-center bg-container-color h-1/6 w-2/12 rounded-3xl shadow-lg m-4 cursor-pointer ease-in-out duration-500 hover:bg-container-hover-color opacity-95">
        <div class="py-6">
            <h2>{{cardProperties.title}}</h2>
            <font-awesome-icon class="h-12 my-4" :icon="cardProperties.icon" />
            <p>{{cardProperties.text}}</p>
        </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'card-container',
    components: {
    },
    props: {
      cardProperties: Object,
    },
    data() {
        return{
            cardProps: this.cardProperties
        }
    },
  }
  </script>
  
  <style></style>