<template>
    <div :id="informationProperties.id" class="flex text-text-color justify-around bg-container-color w-4/6 h-auto rounded-3xl py-12 shadow-lg m-4">
        <div class="px-12">
            <div class="flex flex-row justify-around items-center">
                    <font-awesome-icon class="h-12 my-4" :icon="informationProperties.icon" />
                </div>
                <div class="p-8 text-center">
                    <h2 class="text-3xl font-bold">{{informationProperties.title}}</h2>
                </div>
            <div style="width: 730px;" id="commands">
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle1}}</h2>
                <p class="mb-8">{{informationProperties.cmdText1}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle2}}</h2>
                <p class="mb-8">{{informationProperties.cmdText2}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle3}}</h2>
                <p class="mb-8">{{informationProperties.cmdText3}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle4}}</h2>
                <p class="mb-8">{{informationProperties.cmdText4}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle5}}</h2>
                <p class="mb-8">{{informationProperties.cmdText5}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle6}}</h2>
                <p class="mb-8">{{informationProperties.cmdText6}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle7}}</h2>
                <p class="mb-8">{{informationProperties.cmdText6}}</p>
                <h2 class="text-xl font-bold">{{informationProperties.cmdTitle8}}</h2>
                <p class="mb-8">{{informationProperties.cmdText6}}</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  

  export default {
    name: 'info-component',
    components: {
        
    },
    props: {
      informationProperties: Object,
    },
    data() {
        return{
            infoProps: this.informationProperties,
        }
    }
  }
  </script>
  
  <style></style>