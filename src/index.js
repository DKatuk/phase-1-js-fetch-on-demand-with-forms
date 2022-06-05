const init = (event) => {
  event.preventDefault();
  const form = document.querySelector('form') 
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#searchByID')
    const id = input.value;
    const url = `http://localhost:3000/movies/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(json=> renderDetails(json) )
  })
}

function renderDetails(data){
    const movieTitle = document.querySelector('section#movieDetails h4')
    movieTitle.innerText = data.title;
    const movieSummary = document.querySelector('section#movieDetails p')
    movieSummary.innerText = data.summary;
}

document.addEventListener('DOMContentLoaded', init);