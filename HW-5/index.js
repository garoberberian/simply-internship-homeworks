import { fetchData } from "./fetchData.js";

const navbarTitle = document.querySelector('.navbar__title');
const plansTexts = document.querySelectorAll('.plans-text');
const shapes = document.querySelectorAll('.shape');

const showNavbarTexts = ({page_title, plans}) => {
    navbarTitle.innerHTML = page_title;
    const planNames = plans.map(plan => plan.name.toUpperCase());

    plansTexts.forEach((plansText, i) => {
        plansText.innerHTML = planNames[i];

        if(!plans[i].active) {
            shapes[i].style.opacity = 0.25;
            plansText.style.opacity = 0.5;
        }
    } )
}

fetchData('./test-data.json').then(data => {
    console.log(data)
    showNavbarTexts(data);
} );




