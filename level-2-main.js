let body = document.querySelector('body')
let h4 = document.querySelector('h4')
let p = document.querySelector('p')
let h6 = document.querySelector('h6')
const recipes = [{
    name: 'pad thai',
    ingredients: ['Rice Noodles', 'Roasted Peanuts', 'Soy Sauce', 'Bean Sprouts', 'Ginger', 'Lime'],
    clue: 'The perfect gluten free asian noodle dish.'
},
{
    name: 'vegan tuna salad',
    ingredients: ['Chickpeas', 'Dill Pickle', 'Vegan Mayo', 'Nutirtional Yeast', 'Tamari', 'Lemon Juice'],
    clue: 'A vegan alternative to this simple, great salad.'
},
{
    name: 'red rentil and potato dhal',
    ingredients: ['Red Lentils', 'Potato', 'Red Curry Paste', 'Garam Masala', 'Curry Powder', 'Tumeric'],
    clue: 'Levantine dip or spread for veggies or pita.'
},
{
    name: 'spicy honey glazed salmon',
    ingredients: ['Salmon Filets', 'Paprika', 'Honey', 'Cumin', 'Chili Powder', 'Cumin', 'Salt & Pepper'],
    clue: 'An Asian inspired seafood dish.'
},
{
    name: 'jambalaya',
    ingredients: ['Chicken Breasts', 'Rice', 'Chorizo Sausage', 'Bell Peppers', 'Cajun Seasoning', 'Garlic'],
    clue: 'Famous Creole dish with rice, chicken and chorizo. .'

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
