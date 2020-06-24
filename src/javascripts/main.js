import '../styles/main.scss';
import createListeners from './components/createListeners';
import createProjectCards from './components/createProjectCards';
import projects from './helpers/data/projects';
import techBadges from './components/techBadges';
import tech from './helpers/data/tech';

const init = () => {
  createProjectCards.createProjectCards(projects.projects);
  techBadges.createBadges(tech.getTechnologies());
  createListeners.createListeners('#navLinks');
};

init();
