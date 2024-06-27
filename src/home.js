import chef from './assets/chef.png';

const home =  document.createElement('div');
home.id = 'home';
const a = document.createElement('p');
const b = document.createElement('p');
const c = document.createElement('p');
a.textContent = 'Best pizza in your country';
b.textContent = 'Made with passion since 1908';
c.textContent = 'Order online or visit us!';

const img = new Image();
img.src = chef;

home.appendChild(a);
home.appendChild(b);
home.appendChild(img);
home.appendChild(c);


export default home;