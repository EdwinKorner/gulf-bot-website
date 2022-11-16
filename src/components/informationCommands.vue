<template>
                <h2 class="text-xl font-bold">{{informationCommands.cmdTitle}},</h2>
                <p class="mb-8">{{informationCommands.cmdText}}</p>
</template>
  
  <script>
  
  
  export default {
    name: 'info-cmd-component',
    components: {
    },
    props: {
      informationCommands: Object,
    },
    data() {
        return{
            infoCmd: this.informationCommands,
        }
    }
  }
  </script>
  
  <style></style>