const apiKey = 'sua_chave_api'; // Substitua com sua chave da OMDb API
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const movieList = document.getElementById('movieList');

searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchMovies(query);
  } else {
    alert('Por favor, insira o nome de um filme.');
  }
});

async function fetchMovies(query) {
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}&type=movie`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'True') {
      displayMovies(data.Search);
    } else {
      alert('Nenhum filme encontrado.');
    }
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    alert('Ocorreu um erro. Tente novamente.');
  }
}

function displayMovies(movies) {
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <div class="content">
        <h3>${movie.Title}</h3>
        <p>Ano: ${movie.Year}</p>
      </div>
    `;
    movieList.appendChild(card);
  });
}