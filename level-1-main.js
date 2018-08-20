let body = document.querySelector('body')
let h4 = document.querySelector('h4')
let p = document.querySelector('p')
let h6 = document.querySelector('h6')
const recipes = [{
    name: 'Guacamole',
    ingredients: ['Avocado', 'Lime', 'Cilantro', 'Onion', 'Tomato', 'Salt and Pepper'],
    clue: 'A dip or condiment originating in Mexico.' 
},
{
    name: 'Carrot Cake',
    ingredients: ['Carrots', 'Sugar', 'Eggs', 'Cinnamon', 'Flour', 'Cream Cheese'],
    clue: 'A cake made from a veggie, for healthy eyes.'
},
{
    name: 'Hummus',
    ingredients: ['Chickpeas', 'Tahini', 'Lemon', 'Garlic', 'Salt and Pepper', 'Olive Oil'],
    clue: 'Levantine dip or spread for veggies or pita.' 
},
{
    name: 'Croissant',
    ingredients: ['Flour', 'Brown Sugar', 'Butter', 'Egg', 'Milk'],
    clue: 'A buttery, flaky, pastry named for its crescent shape.'
},
{
    name: 'Spaghetti and meatballs',
    ingredients: ['Pasta', 'Bread Crumbs','Ground Beef', 'Parmesan Cheese', 'Tomatoes', 'Garlic'],
    clue: 'Famous Italian-American dish.'

}];
// console.log(recipes);

// CHOOSE RECIPE!!!!!!!!
let chosenRecipe = 0;
let timesNumber = Math.floor(Math.random() * recipes.length)
function randomRecipes(recipes) {
    chosenRecipe = recipes[timesNumber];
    return chosenRecipe;
}
let currentQuestion = randomRecipes(recipes);
//console.log(currentQuestion);
let submit = document.querySelector('#submit')
//before we add event listener we instanciated submit value
submit.addEventListener('click', function(event) {
    event.preventDefault();
   let input = document.querySelector('#input')
//    console.log(input.value);
checkAnswer();
})
function checkAnswer() {
    if(currentQuestion.name === input.value){
        alert("CORRECT!!!!!!");
    }else{
        alert("WRONG!!!");
    }
}
console.log(chosenRecipe);

// CREATE CLUE GENERATOR!!!!!!!!!!
function createClue() {
    let alertClue = document.createElement('div')
    alertClue.classList.add('randomClue')
    alertClue.innerHTML = recipes[timesNumber].clue
    h6.appendChild(alertClue)
}
createClue()

// CREATE HINT GENERATOR!!!!!!!!!!
let hintNum = 0;

function getHint() {
    let alertHint = document.createElement('div')
    alertHint.classList.add('randomHint')
    alertHint.innerHTML = recipes[timesNumber].ingredients[hintNum]
    hintNum +=1;
    p.appendChild(alertHint)

}
getHint();

//let nextQuestion = 
// let button = document.querySelector('.newDish')
// button.addEventListener('click', function(event) {
//     event.preventDefault();

//     }

// newDish();


// answer.addEventListener('click', function(event){
//     event.target.classList.add('gotAnswer')
//     setTimeout(function() {
//       currentQuestion.parentNode.removeChild(currentQuestion)
//       checkForWinner()
//      }, 1000);   
//   })
 
// return currentQuestion

// function checkForWinner() {
//     const food = document.querySelectorAll('food') 
//     if (recipes.length === 0) {
//       alert('You Win This Round');
//     }
//   }


// for (i = 0; i < 3; i++) {
//     alert('You Won This Level');


















