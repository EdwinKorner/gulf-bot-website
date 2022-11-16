<template>
    <div :id="informationProperties.id" class="flex text-text-color justify-around bg-container-color w-4/6 h-auto rounded-3xl py-12 shadow-lg m-4">
        <div class="px-12">
            <div class="flex flex-row justify-around items-center">
                    <font-awesome-icon class="h-12 my-4" :icon="informationProperties.icon" />
                </div>
                <div class="p-8 text-center">
                    <h2 class="text-3xl font-bold">{{informationProperties.title}}</h2>
                </div>
            <div id="commands">
                <informationCommands
                v-for="informationCommands in infoCommandsArray"
                v-bind:key="informationCommands.cmdTitle"
                :informationCommands = informationCommands
                />
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  import informationCommands from './informationCommands.vue'
  export default {
    name: 'info-component',
    components: {
        informationCommands
    },
    props: {
      informationProperties: Object,
    },
    data() {
        return{
            infoProps: this.informationProperties,

            infoCommandsArray: [
                {
                    cmdTitle: "/play",
                    cmdText: "söker efter sökord eller url från youtube/soundcloud"
                },
                {
                    cmdTitle: "/pause",
                    cmdText: "pausar låten som spelas just nu"
                },
                {
                    cmdTitle: "/skip",
                    cmdText: "skippar låten som spelas just nu"
                },
                {
                    cmdTitle: "/queue",
                    cmdText: "visar alla låtar som ligger i kön"
                },
                {
                    cmdTitle: "/clear",
                    cmdText: "tömmer kön"
                },
                {
                    cmdTitle: "/resume",
                    cmdText: "startar musiken om den är pausad"
                },
            ]
        }
    }
  }
  </script>
  
  <style></style>