import utils from '../helpers/utils';

const createProjectCards = (array) => {
  let domString = `<h3 class="pageTitle">My Recent Projects</h3>
                    <div id="projectsContainer" class="d-flex flex-row flex-wrap justify-content-center">`;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].available === true) {
      domString += `<div class="project card">
                      <div class="card-img-top">
                        <a href="${array[i].url}">
                        <video autoplay>
                            <source src="${array[i].screenshot}" type="video/mp4">
                        </video>
                      </a>
                    </div>
                    <div class="card-body">
                    <h4>${array[i].title}</h4>
                    <p>${array[i].description}</p>
                    <p>${array[i].technologiesUsed}</p>
                    <a href="${array[i].githubUrl}">View Repo</a>
                    </div>
                    </div>`;
    }
  }
  domString += '</div>';
  utils.printToDom('#projectsPage', domString);
};

export default { createProjectCards };
