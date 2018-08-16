let player = [];
const recipes = [{name:'Guacamole', 
ingredients: ['Avocado', 'Lime', 'Cilantro', 'Onion', 'Tomato', 'Salt and Pepper'],
clue: ['A dip or condiment originating in Mexico']},
{name: 'Carrot Cake', 
ingredients: ['Carrots', 'Sugar', 'Eggs', 'Cinnamon', 'Flour', 'Cream Cheese'],
clue: ['A cake made from a veggie for healthy eyes']},
{name: 'Hummus', 
ingredients: ['Chickpeas', 'Tahini', 'Lemon', 'Garlic', 'Salt and Pepper', 'Olive Oil'], 
clue: ['Levantine dip or spread for veggies or pita']}];

// console.log(recipes[0]);

let chosenRecipe;
function randomRecipes(recipes) {
   chosenRecipe = recipes[Math.floor(Math.random()*recipes.length)]
   return chosenRecipe;
}
randomRecipes(recipes)

console.log(chosenRecipe.ingredients);




// chosenRecipe.ingredients
// chosenRecipe.clue
// chosenRecipe.name






// function randomClue(recipes, clue) {
//     return recipes, clue[Math.floor(Math.random()*recipes.length)];
// }
// console.log(randomClue(recipes[0].name.clue));


// FUNCTION TO RANDOMLY SELECT RECIPE
// var randomProperty = function (obj) {
//     var keys = Object.keys(obj)
//     return obj[keys[ keys.length * Math.random() << 0]];
// };


// for/in - loops through the properties of an object
// var person = {fname:"John", lname:"Doe", age:25}; 

// var text = "";
// var x;
// for (x in person) {
//     text += person[x];
// }

// The syntax for accessing the property of an object is:
// objectName.property          // person.age



// FUNCTION TO RANDOMLY SELECT INGREDIENT FROM RANDOMLY SELECTED RECIPE!!!!!




// POPULATE THE FIRST CLUE!!!!!



 

// return('')



