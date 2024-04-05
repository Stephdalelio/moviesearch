const searchBtn = document.querySelector(".api-button");

async function onSearchChange(event) {
  const movieName = event.target.value; // event.target.value from search__line from index.js
  localStorage.setItem("movieName", movieName);

  searchBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;
  searchBtn.classList.add("loading");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  window.location.href = `${window.location.origin}/movie.html`;
}

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}