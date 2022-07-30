import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: "Katsu-curry",
        title: "Katsu-curry",
        description: "Adding some potatoes into water after that fry it add some spices",
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder'
        ],
        method: [
           "Heat oil in a large skillet over medium heat.",
            'Add onion and garlic and cook, strigging, untill fragrant, about 1 minute',
            'Add chicken and potatoes and cook, strigging, until heated through, about 5 minutes.'
        ]
      },
      {
        slug: "Ramen soup",
        title: "Ramen soup",
        description: "Adding some potatoes into water after that fry it add some spices",
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder'
        ],
        method: [
           "Heat oil in a large skillet over medium heat.",
            'Add onion and garlic and cook, strigging, untill fragrant, about 1 minute',
            'Add chicken and potatoes and cook, strigging, until heated through, about 5 minutes.'
        ]
      },
      {
        slug: "Shashlik",
        title: "Shashlik",
        description: "Adding some potatoes into water after that fry it add some spices",
        ingredients: [
          '1 tablespoon olive oil',
          '1 onion chopped',
          '2 cloves garlic, chopped',
          '1 tablespoon curry powder'
        ],
        method: [
           "Heat oil in a large skillet over medium heat.",
            'Add onion and garlic and cook, strigging, untill fragrant, about 1 minute',
            'Add chicken and potatoes and cook, strigging, until heated through, about 5 minutes.'
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
  ADD_RECIPE(state, recipe){
    state.recipes.push(recipe)
  }
  },
  actions: {
  },
  modules: {
  }
})
