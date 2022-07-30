<template>
  <div class="home">
   <h1 class="title">My recipes</h1>
   <button class="openButton"  @click="togglePopup">Add new recipe</button>
 <div class="recipes">
<div v-for="recipe in $store.state.recipes" :key="recipe.slug" class="card">
  
  <h2>
{{recipe.title}}
  </h2>

  <p>{{recipe.description}}</p>
<router-link :to="`/recipe/${recipe.slug}`">
<button>View more</button>
</router-link>
</div>
 </div>
 <!-- Adding recipes -->
 
 <div v-if="popupOpen" class="add_recipe_popup">
   <h1>Add new recipe</h1>
 <form @submit.prevent="">
 <!-- Title -->
 <div class="group">
    <label for="text">Title</label>
    <input v-model="newRecipe.title" placeholder="Enter title" type="text">
  </div>
  <!-- Description -->
  <div class="group">
    <label for="text">Description</label>
   <textarea v-model="newRecipe.description" placeholder="Enter description"></textarea>
  </div>
  <!-- Ingredients -->
  <div class="group">
    <label for="text">Ingredients</label>
    <div v-for="i in newRecipe.ingredientRows" :key="i" class="ingredient">
<input placeholder="Enter ingredient" type="text" v-model="newRecipe.ingredients[i - 1]">

    </div>
    <button type="button" @click="addNewIngredient">Add ingredient</button>
  </div>
  <br>
  <div class="group">
    <label for="text">Method</label>
    <div v-for="i in newRecipe.methodRows" :key="i" class="method">
<textarea v-model="newRecipe.method[i - 1]"></textarea>
    </div>
    <button @click="addNewStep" type="button">Add step</button>
  </div>
  <button @click="addNewRecipe" type="submit">Add recipe</button>
 <button @click="togglePopup" class="close" type="button">Close</button>
 </form>
 </div>
   </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex';
export default {
  name: 'HomeView',
setup() {
  const newRecipe = ref({
    title: '',
    description: '',
    ingredients: [],
    method: [],
    ingredientRows: 1,
    methodRows: 1 
  });
  const popupOpen = ref(false);
  const store = useStore();
  const togglePopup = () => {
    popupOpen.value = !popupOpen.value
  }
  const addNewIngredient = () => {
    newRecipe.value.ingredientRows++
  }
  const addNewStep = () => {
    newRecipe.value.methodRows++
  }
  const addNewRecipe = () => {
    newRecipe.value.slug = newRecipe.value.title.toLocaleLowerCase().replace(/\s/g, '-');
  if(newRecipe.value.slug == ''){
    alert('Please enter a title!');
    return;
  }
  store.commit('ADD_RECIPE', {...newRecipe.value});
  newRecipe.value = {
    title: '',
    description: '',
    ingredients: [],
    method: [],
    ingredientRows: 1,
    methodRows: 1 
  };
  togglePopup();
  }
  return {
    store,
      newRecipe,
      popupOpen,
      togglePopup,
      addNewIngredient,
      addNewStep,
      addNewRecipe
  }
}
}
</script>
