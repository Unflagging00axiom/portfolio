const projets  = [{
    title: "Bonjour",
    description: "lorem Ipsum",
    imageUrl: "https://github.com/immakaymw/immakaymw.github.io/blob/master/images/github.png?raw=true",
    link: "https://github.com/immakaymw/immakaymw.github.io"
}, {
    title: "Bonjour",
    description: "lorem Ipsum",
    imageUrl: "https://github.com/immakaymw/immakaymw.github.io/blob/master/images/github.png?raw=true",
    link: "https://github.com/immakaymw/immakaymw.github.io"
}
]

const projetListSection = document.querySelector("main");

console.log(projetListSection)

/**
 * Creates an HTML element for a project item.
 * @param {object} projet - The project data.
 * @returns {string} The HTML for the project item.
 */
function createProjectItem(projet) {
  return `
    <li class="main__project-item">
      <a href="${projet.link}" target="_blank" rel="noopener noreferrer">
        <article class="main__project">
          <h3 class="main__project-title">${projet.title}</h3>
          <div class="main__project-description">${projet.description}</div>
          <img src="${projet.imageUrl}" alt="Projet ${projet.title}" />
        </article>
      </a>
    </li>
  `;
}

projets.map(projet => {
    const projetHtml = createProjectItem(projet);
    projetListSection.innerHTML += projetHtml;
});