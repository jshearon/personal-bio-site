const printToDom = (elementId, printString) => {
  document.querySelector(elementId).innerHTML = printString;
};

export default { printToDom };
