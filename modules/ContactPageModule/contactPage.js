exports.contactPageLoad = function() {

  const content = document.querySelector('#content');

  const navBar = document.createElement('nav');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  content.appendChild(navBar);
  
  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);


  const header = document.createElement('header');
  header.textContent = "The World's Best Restaurant!";

  const img = document.createElement('img');
  img.setAttribute('alt', "");
  // img.setAttribute('src', '../mediterranean-cuisine-2378758_960_720.jpg');

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = "lökölkökälkälkälök meal? Look narithat will tantalize your taste buds. From our mousomething  enjoy a meal at our restaurant today!";

  content.appendChild(header);
  content.appendChild(img);
  content.appendChild(copy);

}