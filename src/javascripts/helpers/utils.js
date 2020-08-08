const printToDom = (elementId, text) => {
  document.querySelector(elementId).innerHTML = text;
};

export default { printToDom };
