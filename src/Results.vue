<template>
    <div>
    <div class="newBackground">
        <h3 class="text-center">{{nutritionData.brand_name}} {{nutritionData.item_description}}</h3>
        <h4 class="text-center" style="color: darkgrey">Serving Size: {{nutritionData.nf_serving_size_qty}}{{nutritionData.nf_serving_size_unit}}</h4>

        <!-- Flex Container! -->
        <div class="data-grid">

            <div class="data-block">
                <h2>{{nutritionData.nf_calories}}</h2>
                <div class="fact">
                    <p class="unit">Calories</p>
                </div>
            </div>

            <div class="data-block">
                <h2>{{nutritionData.nf_sodium}}</h2>
                <div class="fact">
                    <p class="unit">Sodium</p>
                </div>
            </div>

            <div class="data-block">
                <h2>{{nutritionData.nf_total_fat}}</h2>
                <div class="fact">
                    <p class="unit">Fat</p>
                </div>
            </div>

             <div class="data-block">
                <h2>{{nutritionData.nf_sugars}}</h2>
                <div class="fact">
                    <p class="unit">Sugar</p>
                </div>
            </div>

             <div class="data-block">
                <h2>{{nutritionData.nf_protein}}</h2>
                <div class="fact">
                    <p class="unit">Protein</p>
                </div>
            </div>

        </div>
    </div>
    <button class="btn btn-sm btn-primary btnSpace" @click="restart">Start Over</button>
    </div>
</template>

<script>
    import { eventBus } from './main';

    export default {
        data() {
            return {
                calorie_value: 0,
            }
        },
        props: ['nutritionData'],
        methods: {
            restart() {
                this.$emit('restart', false);
                this.$emit('dataChanged', this.nutrition = []);
            }
        },
        computed: {
            updateValues() {
                if (typeof this.nutritionData.nf_calories != 'undefined') {
                    return this.calorie_value = this.nutritionData.nf_calories;
                } else {
                    return this.calorie_value = 0;
                }
            }
        }
    }
    
</script>

<style scoped>
    .newBackground {
        background-color: lightgrey;
        max-width:750px;
        margin: 0 auto;
        padding-top: 10px;
        border-radius: 5px;
    }

    .data-grid {
        max-width:750px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.5);
        margin-top: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        justify-content: space-between;
    }

    .data-block {
        background: cornflowerblue;
        flex:1;
        margin:8px; 
        /*padding: 10px;*/
        border-radius: 5px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
    }

    .data-block > * {
        flex:1 1 100%;
    }

    .unit {
        font-size: 30px;
        font-family: serif;
        margin: 10px 0;
        font-family: sans-serif;
        color: white;
    }

    .fact {
        flex: 1;
        background: limegreen;
        padding: 0px 10px;
    }

    .btnSpace {
        margin-top: 15px;
        margin-right: auto;
        margin-left: auto;
        display: block;
    }
</style>