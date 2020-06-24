import utils from '../helpers/utils';

const createProjectCards = (array) => {
  let domString = '<h3 class="pageTitle">My Projects</h3>';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].available === true) {
      domString += `<div class="project">
                    <h4>${array[i].title}</h4>
                    <p>${array[i].description}</p>
                    <a href="${array[i].url}"><img src="${array[i].screenshot}"></a>
                    <p>${array[i].technologiesUsed}</p>
                    <a href="${array[i].githubUrl}">View Repo</a>
                    </div>`;
    }
  }
  utils.printToDom('#projectsPage', domString);
};

export default { createProjectCards };
