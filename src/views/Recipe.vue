<template>
  <div class="recipe">
      <router-link to="/">&lt; Back</router-link>
      <h1>{{recipe.title}}</h1>
      <p>{{recipe.description}}</p>
      <hr>
      <div class="ingredients">
        <h3>Ingredients :</h3>
        <ul>
            <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
            {{ingredient}}</li>
        </ul>
      </div>
      <!-- Method -->
      <div class="method">
        <h3>Method :</h3>
        <ol>
            <li v-for="(step, i) in recipe.method" :key="i">
            {{step}}
            </li>
        </ol>
      </div>
</div>
</template>

<script>
export default {
computed: {
    recipe(){
        return this.$store.state.recipes.find(recipe => recipe.slug === this.$route.params.slug)
    }
}
}
</script>

<style scoped>
a{
    color: white;
    text-decoration: none;
    font-size: 30px;

}
/* h3, h1{
    color: gold;
} */
li{
    margin-top: 10px;
line-height: 25px;
font-size: 18px;
margin-left: -4%;
}
.recipe{
    color: white;
    font-family: sans-serif;
    width: 600px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 25px;
   background-color: #0fba8c;
   border-radius: 10px;
}
</style>