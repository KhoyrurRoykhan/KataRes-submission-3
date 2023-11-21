import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
// eslint-disable-next-line import/extensions
import './views/components/hero-bar.js';
// eslint-disable-next-line import/extensions
import './views/components/app-footer.js';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
