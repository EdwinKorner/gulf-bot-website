<template>
    <div id="container" class="flex text-text-color justify-around text-center bg-container-color w-2/12 rounded-3xl shadow-lg m-4 cursor-pointer ease-in-out duration-500 hover:bg-container-hover-color opacity-90">
        <div class="py-6">
            <h2>{{cardProperties.title}}</h2>
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
    }
  }
  </script>
  
  <style></style>