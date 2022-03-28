import "./sass/style.scss";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "http://agata.dk/portfolio-db/wp-json/wp/v2/project/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayProject(data));

function displayProject(project) {
  document.querySelector("h1").textContent = project.projtitle;
  // clone.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
}
