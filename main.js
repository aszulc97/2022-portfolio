import "./sass/style.scss";

const url = "http://agata.dk/portfolio-db/wp-json/wp/v2/project?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showProjects));

function showProjects(project) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("h4").textContent = project.projtitle;
  clone.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  document.querySelector(".cards").appendChild(clone);
}
