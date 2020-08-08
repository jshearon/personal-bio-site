import me from '../../../assets/images/me.jpg';
import utils from '../../helpers/utils';

const printNav = () => {
  const domString = `<img src="${me}" alt="">
    <h1>Jonathan Shearon</h1>
    <h4>Full Stack Developer</h4>
    <ul id="navLinks">
      <li id="navToBio" class="navlink" data-page-id="bioPage">Bio</li>
      <li id="navToTechnologies" class="navlink" data-page-id="technologiesPage">Technologies</li>
      <li id="navToProjects" class="navlink" data-page-id="projectsPage">Projects</li>
    </ul>`;
  utils.printToDom('#navigation', domString);
};

export default { printNav };
