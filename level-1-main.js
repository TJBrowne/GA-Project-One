let body = document.querySelector('body')
let h4 = document.querySelector('h4')
let p = document.querySelector('p')
let h6 = document.querySelector('h6')
const recipes = [{
    name: 'guacamole',
    ingredients: ['Avocado', 'Lime', 'Cilantro', 'Onion', 'Tomato', 'Salt and Pepper'],
    clue: 'A dip or condiment originating in Mexico.'
},
{
    name: 'carrot cake',
    ingredients: ['Carrots', 'Sugar', 'Eggs', 'Cinnamon', 'Flour', 'Cream Cheese'],
    clue: 'A cake made from a veggie, for healthy eyes.'
},
{
    name: 'hummus',
    ingredients: ['Chickpeas', 'Tahini', 'Lemon', 'Garlic', 'Salt and Pepper', 'Olive Oil'],
    clue: 'Levantine dip or spread for veggies or pita.'
},
{
    name: 'croissant',
    ingredients: ['Flour', 'Brown Sugar', 'Butter', 'Egg', 'Milk'],
    clue: 'A buttery, flaky, pastry named for its crescent shape.'
},
{
    name: 'spaghetti and meatballs',
    ingredients: ['Pasta', 'Bread Crumbs', 'Ground Beef', 'Parmesan Cheese', 'Tomatoes', 'Garlic'],
    clue: 'Famous Italian-American dish.'

}];

let timesNumber = 0;
let hintNum = 0;

function randomRecipes(recipes) {
    timesNumber = Math.floor(Math.random() * recipes.length)
    const chosenRecipe = recipes[timesNumber];
    return chosenRecipe;
}

let currentQuestion = randomRecipes(recipes);

let submit = document.querySelector('#submit')

submit.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('#input')
    checkAnswer();
})

function checkAnswer() {
    if (currentQuestion.name == input.value.toLowerCase()) {
        alert("CORRECT!!!!!!");
    } else {
        console.log(input.value)
        alert("WRONG!!!");
    }
}

function newQuestion() { 
    recipes.splice(timesNumber, 1);

    console.log(recipes);
    
    currentQuestion = randomRecipes(recipes);

    createClue();
    p.innerHTML = '';
    hintNum = 0;
}

let nextQuestion = randomRecipes(recipes);
let button = document.querySelector('.newDish');

button.addEventListener('click', function (event) {
    console.log('click');
    event.preventDefault();
    newQuestion();
})

function createClue() {
    h6.innerHTML = currentQuestion.clue;
}
createClue()

function getHint() {
    let alertHint = document.createElement('div')
    alertHint.classList.add('randomHint')
    alertHint.innerHTML = currentQuestion.ingredients[hintNum];
    hintNum += 1;
    p.appendChild(alertHint)
}




