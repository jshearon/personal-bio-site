const printToDom = (elementId, printString) => {
  document.querySelector(elementId).innerHTML = printString;
}

const createProjectCards = (array) => {
  let domString = '<h3>My Projects</h3>';
  for (i=0; i < array.length; i++) {
    if (array[i].available === true) {
      domString += `<div class="project">
                    <h2>${array[i].title}</h2>
                    <p>
                    ${array[i].description}<br>
                    ${array[i].technologiesUsed}<br>
                    <a href="${array[i].url}"><img src="${array[i].screenshot}"></a><br>
                    <a href="${array[i].githubUrl}">View Repo</a>
                    </p>
                    </div>`;
    }
  }
  printToDom('#projectsPage', domString);
}

//function that loops through divs and changes display based on click
const showHideDivs = (divClass, clickedId) => {
  let divs = document.getElementsByClassName(divClass);
  for (i = 0; i < divs.length; i++) {
    if (divs[i].id == clickedId) {
      console.log(divs[i].id + clickedId);
      divs[i].style.display = "block";
    } else {
      console.log(divs[i].id + clickedId);
      divs[i].style.display = "none";
    }
  }
}

//programatically create event listeners
const createListeners = (menuId) => {
  const menuItems = document.querySelector(menuId).children;
  console.log(menuItems);
    for (i=0; i < menuItems.length; i++) {
      document.getElementById(menuItems[i].id).addEventListener("click", function() {
        showHideDivs("fullPage", this.dataset.pageId);
      }, false);
    }
}

const init = () => {
  createProjectCards(projects);
  createListeners("#navLinks");
}

init();
