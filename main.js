import "./sass/style.scss";

const url = "https://agata.dk/portfolio-db/wp-json/wp/v2/project?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach(showProjects));

function showProjects(project) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("a").href = "project.html?id=" + project.id;
  clone.querySelector("h4").textContent = project.projtitle;
  clone.querySelector("img").src = project._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  document.querySelector(".cards").appendChild(clone);
}

//animations
let fromLeft = [{ transform: "translateY(12px)" }, { transform: "translateY(0)" }, { transform: "translateY(12px)" }];

let arrow = document.querySelector(".fa-arrow-down");
arrow.animate(fromLeft, {
  duration: 1000,
  iterations: Infinity,
  easing: "ease-out",
});
