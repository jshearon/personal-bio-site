import '../styles/main.scss';
import 'bootstrap';
import '@fortawesome/fontawesome-free';
import createListeners from './components/createListeners';
import createProjectCards from './components/createProjectCards';
import projects from './helpers/data/projects';
import techBadges from './components/techBadges';
import tech from './helpers/data/tech';
import navigation from './components/navigation/navigation';
import footer from './components/footer/footer';

const init = () => {
  navigation.printNav();
  footer.printFooter();
  createProjectCards.createProjectCards(projects.projects);
  techBadges.createBadges(tech.getTechnologies());
  createListeners.createListeners('#navLinks');
};

init();
