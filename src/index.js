// import { pageLoad } from '../modules/PageLoadModule';
import { homePageLoad } from '../modules/HomePageModule/homePage';
import { menuPageLoad } from '../modules/MenuPageModule/menuPage';
import { contactPageLoad } from '../modules/ContactPageModule/contactPage';

function resetPage() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}



function initializeButtons() {
  const navButtons = document.querySelectorAll('button');
  navButtons.forEach(btn => btn.addEventListener('click', function(e) {
    

    if (e.target.textContent === 'Home') {
      console.log(e.target);
      resetPage();
      homePageLoad();
      initializeButtons();
      
    } else if (e.target.textContent === 'Menu') {
      console.log(e.target);
      resetPage();
      menuPageLoad();
      initializeButtons();

    } else if (e.target.textContent === 'Contact') {
      console.log(e.target);
      resetPage();
      contactPageLoad();
      initializeButtons();
    }
  }))
}

homePageLoad();
initializeButtons();

