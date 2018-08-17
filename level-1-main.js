let body = document.querySelector('body')
let h4 = document.querySelector('h4')
let p = document.querySelector('p')
const recipes = [{
    name: 'Guacamole',
    ingredients: ['Avocado', 'Lime', 'Cilantro', 'Onion', 'Tomato', 'Salt and Pepper'],
    clue: 'A dip or condiment originating in Mexico'
},
{
    name: 'Carrot Cake',
    ingredients: ['Carrots', 'Sugar', 'Eggs', 'Cinnamon', 'Flour', 'Cream Cheese'],
    clue: 'A cake made from a veggie for healthy eyes'
},
{
    name: 'Hummus',
    ingredients: ['Chickpeas', 'Tahini', 'Lemon', 'Garlic', 'Salt and Pepper', 'Olive Oil'],
    clue: 'Levantine dip or spread for veggies or pita'
}];

console.log(recipes);

// CHOOSE RECIPE!!!!!!@!!
let chosenRecipe = 0;
function randomRecipes(recipes) {
    chosenRecipe = recipes[Math.floor(Math.random() * 3)];
    return chosenRecipe;
}
randomRecipes(recipes)

console.log(chosenRecipe);

// CREATE CLUE GENERATOR!!!!!!!!!!
function createClue() {
    let alertClue = document.createElement('div')
    alertClue.classList.add('randomClue')
    alertClue.innerHTML = recipes[0].clue
    h4.appendChild(alertClue)
}
createClue()


// CREATE HINT GENERATOR!!!!!!!!!!
let hintNum = 0;

function getHint() {
    let alertHint = document.createElement('div')
    alertHint.classList.add('randomHint')
    alertHint.innerHTML = recipes[0].ingredients[hintNum]
    hintNum +=1;
    p.appendChild(alertHint)

}
console.log();


    // on the page in your html ...make a ul with a class of "hints"
    // use js to find that element on the page using js query save to a variable
    // make a variable called newhint and remove the hint from the clues array using the shift method on arrays      
    // append onto hints a li that contains the first hint in the hints Array 
    // hints.append('<li>${hint}</li>')
































