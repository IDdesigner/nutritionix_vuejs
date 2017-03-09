<template>
    <div>
        <h3 class="text-center">{{nutritionData.brand_name}} - {{nutritionData.item_description}}</h3>
        <ul class="list-group">
            <li class="list-group-item">Protein: {{nutritionData.nf_protein}}</li>
            <li class="list-group-item">Calories: {{nutritionData.nf_calories}}</li>
            <li class="list-group-item">Fat: {{nutritionData.nf_total_fat}}</li>
            <li class="list-group-item">Sodium: {{nutritionData.nf_sodium}}</li>
            <li class="list-group-item">Sugar: {{nutritionData.nf_sugars}}</li>
        </ul>
        <!--<div class="ac">
            <div class="acib">
                <h3>Calories</h3>
                <input type="text" name="calories" class="dial" data-min="0" data-max="500" data-fgColor="#66CC66" data-angleOffset="-125" data-angleArc="250" data-readOnly="true" data-width="100" :value="calorie_value" @input="calorie_value = updateValues">
            </div>
        </div>-->
    </div>
</template>

<script>
    import { eventBus } from './main';

    export default {
        data() {
            return {
                // nutritionData: []
            }
        },
        props: ['nutritionData']
    }
    
</script>

<style>

</style>