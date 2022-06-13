const elMovieList = document.querySelector(".movie__list");
const elResult = document.querySelector(".movie__result-num");
const elSelect = document.querySelector(".genres__select");
const elGenreName = document.getElementById("genreName");

let genreAll = "All"



elResult.textContent = films.length;
elGenreName.textContent = genreAll;

elSelect.innerHTML = null;

// console.log(films) 
const renderGenres = function (arr) {
  const uniqueGenres = [];
  
  uniqueGenres.push(genreAll)

  arr.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!uniqueGenres.includes(genre)) {
        uniqueGenres.push(genre);
      }
    });
  });

  uniqueGenres.forEach((genre) => {
    const genresOption = document.createElement("option");

    genresOption.textContent = genre;
    genresOption.value = genre;
    
    elSelect.appendChild(genresOption);
  });
};

const renderMovies = function (arr, htmlElement) {
  htmlElement.innerHTML = ""
  arr.forEach((movie) => {
    //CREATE ELEMENT
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h5");
    const newLanguage = document.createElement("p");
    const newYear = document.createElement("p");
    const newButton = document.createElement("a");

    //SET ATTTIBUTE
    newLi.setAttribute("class", "card mb-3");
    newLi.style.width = "18rem";
    newImg.classList.add("card-img-top");
    newImg.setAttribute("src", movie.poster);
    newDiv.classList.add("card-body");
    newTitle.classList.add("card-title");
    newLanguage.classList.add("card-text");
    newYear.classList.add("card-text");
    newButton.setAttribute("class", "btn btn-danger");
    newButton.setAttribute(
      "href",
      `https://www.youtube.com/watch?v=${movie.youtubeId}`
    );

    newTitle.textContent = movie.title;
    // newLanguage.textContent = movie.overview;
    newYear.textContent = movie.year;
    newButton.textContent = "Watch Trailer";

    const genresList = document.createElement("ul");

    movie.genres.forEach((genre) => {
      const genreItem = document.createElement("li");

      genreItem.textContent = genre;

      genresList.appendChild(genreItem);
    });

    //APPEND
    htmlElement.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    // newDiv.appendChild(newLanguage);
    newDiv.appendChild(newYear);
    newDiv.appendChild(newButton);
    newDiv.appendChild(genresList);
  });
};

renderMovies(films, elMovieList);
renderGenres(films);
// console.log(films)





// Sorting Films
function sortingFilms() {
  let optionValue = elSelect.value;

  if (optionValue === genreAll) {
    renderMovies(films, elMovieList);
    elResult.textContent = films.length;
    elGenreName.textContent = genreAll;
  } 
  else {
    let sortedFilms = films.filter((movie) =>
      movie.genres.includes(optionValue)
    );
    renderMovies(sortedFilms, elMovieList);
    elResult.textContent = sortedFilms.length;
    elGenreName.textContent = optionValue;
  }
}
