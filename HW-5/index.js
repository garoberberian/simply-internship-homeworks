import { fetchData } from "./fetchData.js";

const navbarTitle = document.querySelector('.navbar__title');
const plansTexts = document.querySelectorAll('.plans-text');

fetchData('./test-data.json').then(data => {
    const {page_title, plans, tabs} = data;
    navbarTitle.innerHTML = page_title;
    console.log(plans)
    const planNames = plans.map(plan => plan.name)
    plansTexts.forEach((plansText, i) => plansText.innerHTML = planNames[i])
})


