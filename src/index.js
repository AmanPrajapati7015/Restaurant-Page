import './styles.css'
import home from './home'
import contact from './contact';
import menu from './menu';

const contentDict = {home, contact, menu};


const content = document.querySelector('#content');
const btns = document.querySelectorAll('.nav-btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        btns.forEach(btn=>btn.classList.remove('active'));
        btn.classList.add('active');
        let t = e.target.getAttribute('data-content');
        content.innerHTML = '';
        content.appendChild(contentDict[t]);
    })
})

content.appendChild(home);





