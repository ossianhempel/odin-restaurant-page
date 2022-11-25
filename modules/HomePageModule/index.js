exports.homePageLoad = function() {
  const content = document.querySelector('#content');

  const header = document.createElement('header');
  header.textContent = "Ossian's Delicious Swedish Meals!";

  const img = document.createElement('img');
  img.setAttribute('alt', "");
  img.setAttribute('src', '../mediterranean-cuisine-2378758_960_720.jpg');

  const copy = document.createElement('div');
  copy.classList.add('copy');
  copy.textContent = "Are you looking for a delicious Swedish meal? Look no further than our restaurant! We offer a variety of traditional Swedish dishes that will tantalize your taste buds. From our mouth-watering meatballs to our creamy potatoes, we have something for everyone to enjoy. So come on in and enjoy a meal at our restaurant today!";

  const openHours = document.createElement('div');
  openHours.classList.add('open-hours-container');
  openHours.textContent = "Monday: 10:00 - 15:00 \t Tuesday: 10:00 - 15:00 \t";

  const location = document.createElement('div');
  location.classList.add('location-container');
  location.textContent = "Mejselvägen 37. 126 38 Hägersten";

  content.appendChild(header);
  content.appendChild(img);
  content.appendChild(copy);
  content.appendChild(openHours);

}