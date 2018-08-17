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

console.log(recipes[0]);

let chosenRecipe;
function randomRecipes(recipes) {
    chosenRecipe = recipes[Math.floor(Math.random() * recipes.length)]
    return chosenRecipe;
}
randomRecipes(recipes)

console.log(chosenRecipe.ingredients);

// chosenRecipe.ingredients
// chosenRecipe.clue
// chosenRecipe.name

function createClue() {
    let alertClue = document.createElement('div')
    alertClue.classList.add('randomClue')
    alertClue.innerHTML = recipes[0].clue
    h4.appendChild(alertClue)
}
createClue()

function getHint() {
    let alertHint = document.createElement('div')
    alertHint.classList.add('randomHint')
    randomIndex = Math.floor(Math.random() * recipes(ingredients.length))
    alertHint.innerHTML = recipes[0].ingredients[randomIndex]
    p.appendChild(alertHint)

}
console.log();

//}   
    //console.log('getting hint');

    // on the page in your html ...make a ul with a class of "hints"
    // use js to find that element on the page using js query save to a variable
    // make a variable called newhint and remove the hint from the clues array using the shift method on arrays      
    // append onto hints a li that contains the first hint in the hints Array 
    // hints.append('<li>${hint}</li>')

    let hintRequest = document.getElementsByClassName('hints')
    let newHint = recipes(ingredients.shift());
    p.appendChild(`<li>${hints}</li>`)

    hintRequest()



//{
//     let ingredientHint = document.getElementsByClassName('hints')
//     let newhint = recipes.shift();
//     let showHint = newhint.ingredients;
//     let hint = showHint.shift();
//     p.appendChild(`<li>${hint}</li>`)
// }
//     console.log(ingredientHint);
    
    // let recipes = [{
    //     name: 'food',
    //     ingredients: ['mustard','ketchup'],
    //  }];
     
    //  let show = recipes.shift();
    //  let another =  show.ingredients;
    //  let final = another.shift();
     
    //  console.log(final);


// createHint()






























