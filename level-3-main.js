let body = document.querySelector('body')
let h4 = document.querySelector('h4')
let p = document.querySelector('p')
let h6 = document.querySelector('h6')
const recipes = [{
    name: 'enchilada sauce ',
    ingredients: ['Red Chiles', 'Onion', 'Garlic', 'Vegetable Broth', 'Sea Salt', 'Tabasco Sauce'],
    clue: 'A spanish smoky, rich, and spicy red  sauce made with simple ingredients .'
},
{
    name: 'vegan thai curry',
    ingredients: ['Coconut Milk', 'Firm Tofu', 'Red Curry Paste', 'Spy Sauce', 'Cumin', 'Tumerice'],
    clue: 'Thai dish made with a variety of pastes, assorted meats and vegetables.'
},
{
    name: 'red rentil and potato dhal',
    ingredients: ['Shrimp', 'Rice', 'Seafood Stock', 'Clams', 'Onion', 'Smoked Paprika', 'Saffron'],
    clue: 'A classic Indian dish serve this dish with basmati rice, mango chutney and yoghurt.'
},
{
    name: 'chia seed pudding',
    ingredients: ['Chia Seeds', 'Coconut Milk', 'Vanilla Extract', 'Strawberries', 'Granola', 'Maple Syrup'],
    clue: 'A creamy, maple-infused pudding, a naturally vegan breakfast recipe made with simple ingredients.'
},
{
    name: 'cabbage kimchi',
    ingredients: ['Cabbage', 'Fresh Peeled Ginger', 'Korean Red Pepper Flakes', 'Fish Sauce', 'Korean Radish', 'Sugar', 'Scallions'],
    clue: 'In Korean cuisine, is a famous traditional side dish made from salted & fermented vegetables.'

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
