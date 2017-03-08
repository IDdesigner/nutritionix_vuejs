<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">Enter UPC Code</h3>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <input type="text" class="form-control" v-model="upc" placeholder="Look for the numbers on the barcode"/>
            </div>
            <button class="btn btn-primary btn-block" @click="fetchData">Get Data</button>
        </div>
    </div>
</template>

<script>
  import pw from './passwords';
  export default {
    data () {
      return {
        upc: '',
        nutrition: [],
        calorie_value: 0,
        ai: pw.APP_ID,
        ak: pw.APP_KEY
      }
    },
    methods: {
      fetchData() {
        this.$http.get(`https://api.nutritionix.com/v1_1/item?upc=${this.upc}&appId=${this.ai}&appKey=${this.ak}`)
          .then(response => {
            return response.json();
          }, error => {
            console.log(error);
          })
          .then(data => {
            this.nutrition = data;
            console.log(this.nutrition);
            this.calorie_value = this.nutrition.nf_calories;
            this.$emit('isEntered', true);
          })
      }
    },
    computed: {
      updateValues() {
        if (typeof this.nutrition.nf_calories != 'undefined') {
          return this.calorie_value = this.nutrition.nf_calories;
        } else {
          return this.calorie_value = 0;
        }
      }
    }
  }
</script>

<style>

</style>