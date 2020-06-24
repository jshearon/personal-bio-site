import utils from '../helpers/utils';

const createBadges = (array) => {
  console.error(array);
  let domString = '<h3>Technologies Mastered</h3><ul>';
  for (let i = 0; i < array.length; i += 1) {
    domString += `<li>${array[i].img} ${array[i].name}</li>`;
  }
  domString += '</ul>';
  utils.printToDom('#technologiesPage', domString);
};

export default { createBadges };
