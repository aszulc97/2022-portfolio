import "./sass/style.scss";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://agata.dk/portfolio-db/wp-json/wp/v2/project/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => displayProject(data));

function displayProject(project) {
  document.querySelector("h1").textContent = project.projtitle;
  document.querySelector("img").src = project.mockup;
  document.querySelector(".website").href = project.website;
  document.querySelector(".repo").href = project.repo;
  document.querySelector(".description").innerHTML = project.desc;
  document.querySelector(".solution").innerHTML = project.solution;

  //document.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
}
