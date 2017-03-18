<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">nutritionix</h1>
      </div>
    </div>
    <div class="row">
      <div>
      <!--<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">-->
        <transition name="flip" mode="out-in">
          <component :is="mode" @isEntered="isEntered($event)" :nutritionData="nutritionData" @dataChanged="nutritionData = $event" @restart="isEntered($event)"></component>
        </transition>
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
              // alert('You need to enter a valid UPC');
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
  .flip-enter {
    /*transform: rotateY(0)*/
  }
  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }
  .flip-leave {
    /*transform: rotateY(0)*/
  }
  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg); 
    }
    to {
      transform: rotateY(90deg);
    }
  }
  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg); 
    }
  }

</style>
