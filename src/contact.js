import location from './assets/restaurant-location.png'

const contact = document.createElement('div');
contact.id = 'contact';

const a = document.createElement('p');
const b = document.createElement('p');
a.textContent = '📞 123 456 7890';
b.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

const img = new Image();
img.src = location;

contact.appendChild(a);
contact.appendChild(b);
contact.appendChild(img);

export default contact;
