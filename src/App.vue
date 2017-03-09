<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">nutritionix</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <component :is="mode" @isEntered="isEntered($event)" :nutritionData="nutritionData" @dataChanged="nutritionData = $event"></component>
      </div>
    </div>
  </div>
</template>

<script>
    import EnterUPC from './EnterUPC.vue';
    import Results from './Results.vue';
    export default {
        data() {
            return {
              mode: 'app-enterupc',
              nutritionData: []
            }
        },
        methods: {
          isEntered(bool) {
            if (bool == true) {
              this.mode = 'app-results';
            } else {
              this.mode = 'app-enterupc';
              alert('You need to enter a valid UPC');
            }
          }
        },
        components: {
            appEnterupc: EnterUPC,
            appResults: Results
        }
    }
</script>

<style>

</style>
