document.getElementById("fetchButton").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/");

  if (!response.ok) {
    throw new Error(`Http error status ${response.status}`);
  }

  const data = await response.json();

  const arrMovies = data.map(
    (movie) => new MovieClass(movie.title, movie.image, movie.overview)
  );

  const svgContainer = document.getElementById("svgContainer");
  svgContainer.innerHTML = "";

  arrMovies.forEach((movie) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = `https://image.tmdb.org/t/p/w500${movie.Image}`;
    imgElement.alt = "Movie poster";
    cardContainer.appendChild(imgElement);

    const h3name = document.createElement("h3");
    h3name.innerText = movie.Title;

    const pDescription = document.createElement("p");

    pDescription.innerText = movie.Overview;

    cardContainer.appendChild(h3name);
    cardContainer.appendChild(pDescription);

    svgContainer.appendChild(cardContainer);
  });
});
