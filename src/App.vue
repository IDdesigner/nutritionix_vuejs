<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>NutritionIX</h1>
            <div class="form-group">
                <label>UPC Code</label>
                <input type="text" class="form-control" v-model="upc" placeholder="Enter a UPC code"/>
            </div>
            <button class="btn btn-primary" @click="fetchData">Get Data</button>
            <br>
            <ul class="list-group">
              <li class="list-group-item">Protein: {{nutrition.nf_protein}}</li>
              <li class="list-group-item">Calories: {{nutrition.nf_calories}}</li>
              <li class="list-group-item">Fat: {{nutrition.nf_total_fat}}</li>
              <li class="list-group-item">Sodium: {{nutrition.nf_sodium}}</li>
              <li class="list-group-item">Sugar: {{nutrition.nf_sugars}}</li>
            </ul>
            <hr>
            <div class="ac">
              <div class="acib">
                  <h3>Calories</h3>
                  <input type="text" name="calories" class="dial" data-min="0" data-max="500" data-fgColor="#66CC66" data-angleOffset="-125" data-angleArc="250" data-readOnly="true" data-width="100" :value="updateValues" v-model="nutrition.nf_calories">
              </div>
            </div>
        </div>
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
          })
      }
    },
    computed: {
      updateValues() {
        console.log('Computed');
        // if (typeof this.nutrition.nf_calories != 'undefined') {
        //   this.calorie_value = this.nutrition.nf_calories;
        //   console.log(this.calorie_value)
        // }
        if (typeof this.nutrition.nf_calories != 'undefined') {
          $("[name='calories']").val(this.nutrition.nf_calories);
          $("[name='calories']").trigger('change');
        } else {
          this.nutrition.nf_calories = 0;
        }
      }
    }
  }
</script>

<style>

</style>
