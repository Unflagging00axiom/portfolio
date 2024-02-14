const projets  = [{
    title: "Unity Care Project",
    description: `UnityCare is a dynamic web and mobile platform that fosters unity and empowerment within communities by facilitating seamless connections between individuals in need of assistance and compassionate volunteers. The platform revolutionizes the way communities support one another`,
    imageUrl: "./assets/andrea-piacquadio-3791664.jpg",
    link: "https://github.com/UnityCareProject",
}, {
    title: "Bonjour",
    description: "lorem Ipsum",
    imageUrl: "https://www.natura-sciences.com/wp-content/uploads/2022/06/des-ordures-et-des-hommes-france-2.jpg",
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
			<article class="main__project">
			<div class="main__project-description">
			<h3 class="main__project-title">${projet.title}</h3>
			<div class="main__project-text">${projet.description}</div>
			</div>
			<a href="${projet.link}" target="_blank" rel="noopener noreferrer">
				<div class="main__project-picture">
					<img src="${projet.imageUrl}" alt="Projet ${projet.title}" />
				</div>
			</a>
        </article>
    </li>
  `;
}

projets.map(projet => {
    const projetHtml = createProjectItem(projet);
    projetListSection.innerHTML += projetHtml;
});