// function that loops through divs and changes display based on click
const showHideDivs = (event) => {
  const clickedId = event.target.dataset.pageId;
  const divs = document.getElementsByClassName('fullPage');
  for (let i = 0; i < divs.length; i += 1) {
    if (divs[i].id === clickedId) {
      if (divs[i].id === 'projectsPage') {
        divs[i].style.display = 'block';
      } else {
        divs[i].style.display = 'block';
      }
    } else {
      divs[i].style.display = 'none';
    }
  }
};

export default { showHideDivs };
