
import pizza from './menu-items';

const menu = document.createElement('div');
menu.id = 'menu';

function makeCard(details){
    const card = document.createElement('div');
    card.classList.add('card');

    const img = new Image();
    const name = document.createElement('h2');
    const info = document.createElement('p');

    img.src = details.src;
    name.textContent = details.name;
    info.textContent = details.details;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(info);

    return card;
}

const cards = pizza.map(makeCard);
cards.forEach((card)=>menu.appendChild(card));

export default menu;