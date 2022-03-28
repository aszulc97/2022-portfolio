import "./sass/style.scss";

const url = "http://agata.dk/portfolio-db/wp-json/wp/v2/project?_embed";

fetch(url)
  .then((response) => response.json())
  .then((data) => data.forEach(showProjects));

function showProjects(project) {
  document.querySelector(".project_card > h4").textContent = project.title.rendered;
  document.querySelector(".project_card > img").src =
    project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
}

console.log("ho");
