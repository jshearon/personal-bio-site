import showHideDivs from './showHideDivs';

// programatically create event listeners
const createListeners = () => {
  document.querySelector('#navLinks').addEventListener('click', (event) => {
    if (event.target.classList.contains('navlink')) {
      showHideDivs.showHideDivs(event);
    }
  });
};

export default { createListeners };
