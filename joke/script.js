const root = document.createElement('div')
root.classList.add('container', 'd-flex', 'flex-column', 'align-items-center', 'mt-5');

const title = document.createElement('h1')
title.textContent = 'RAndom Joke Generator'
title.classList.add('display-4', 'text-center', 'mb-4', 'text-primary')

function getJoke(){
    fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart')
    .then(response=> response.json())
    .then(data=>displayJoke(data))
    .catch(error=>console.error('Error fetching joke:', error))
}

const jokeElement = document.createElement('div')
jokeElement.classList.add('card', 'p-4', 'text-centre')
function displayJoke(joke){
    jokeElement.textContent = `${joke.setup} - ${joke.delivery}`
}

getJoke()

const newJoke = document.createElement('button')
newJoke.textContent='New Joke'
newJoke.classList.add('btn', 'btn-primary', 'mt-3', 'joke-btn')
newJoke.addEventListener('click',getJoke)

root.append(jokeElement, newJoke)
document.body.append(title, root)