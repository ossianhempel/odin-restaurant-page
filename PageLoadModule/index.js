exports.pageLoad = function() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  header.textContent = "The World's Best Restaurant!";

  const img = document.createElement('img');
  img.setAttribute('alt', "");
  img.setAttribute('src', '../mediterranean-cuisine-2378758_960_720.jpg');

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = "Are you looking for a delicious Swedish meal? Look no further than our restaurant! We offer a variety of traditional Swedish dishes that will tantalize your taste buds. From our mouth-watering meatballs to our creamy potatoes, we have something for everyone to enjoy. So come on in and enjoy a meal at our restaurant today!";

  content.appendChild(header);
  content.appendChild(img);
  content.appendChild(copy);

}