import './footer.scss';
import utils from '../../helpers/utils';

const printFooter = () => {
  const domString = `<a href="mailto:jonathan.shearon@gmail.com"><i class="fas fa-envelope"></i></a>
                    <a href="https://twitter.com/jonathanshearon"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://github.com/jshearon"><i class="fab fa-github-square"></i></a>
                    &copy;2020 Jonathan Shearon`;

  utils.printToDom('#page-footer', domString);
};

export default { printFooter };
