const printToDom = (elementId, printString) => {
  document.querySelector(elementId).innerHTML = printString;
}

const createProjectCards = (array) => {
  let domString = `<h3 class="pageTitle">My Projects</h3>`;
  for (i=0; i < array.length; i++) {
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
  printToDom('#projectsPage', domString);
}

//function that loops through divs and changes display based on click
const showHideDivs = (divClass, clickedId) => {
  let divs = document.getElementsByClassName(divClass);
  for (i = 0; i < divs.length; i++) {
    if (divs[i].id == clickedId) {
      console.log(divs[i].id + clickedId);
      if (divs[i].id == "projectsPage") {
        divs[i].style.display = "flex";
      } else {
        divs[i].style.display = "block";
      }
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
