'use strict'
const navbarTitle = document.querySelector('.navbar__title');
const plansTexts = document.querySelectorAll('.plans-text');
const shapes = document.querySelectorAll('.shape');
const servicesTitles = document.querySelectorAll('.services__title');
const systemNames = document.querySelectorAll('.system-name');
const ids = document.querySelectorAll('.id');
const createdDate = document.querySelectorAll('.created-date');
const activeLicenses = document.querySelectorAll('.active-licenses');

const fetchData = async (path) => {
    const response = await fetch(path);
    return response.json();
}

const insertNavbarTexts = ({page_title, plans}) => {
    navbarTitle.innerHTML = page_title;
    
    plans.forEach((plan, i) => {
        plansTexts[i].innerHTML = plan.name;
        if(!plan.active) {
            shapes[i].style.opacity = 0.25;
            plansTexts[i].style.opacity = 0.5;
        }
    })

}

const insertSystemsTexts = (systems) => {
    systems.forEach((system, i) => {
        systemNames[i].innerHTML = system.system_name;
        ids[i].innerHTML = system.id;
        createdDate[i].innerHTML = system.created_date;
        activeLicenses[i].innerHTML = system.active_licenses;
    })
}

const insertTabsTexts = ({tabs}) => {
    tabs.forEach((tab, i) => {
        servicesTitles[i].innerHTML = tab.title;
        const tabDataLength = Object.keys(tab.data).length;
        if(tabDataLength) {
            insertSystemsTexts(tab.data.systems)
        }
    });
}

fetchData('./test-data.json').then(data => {
    insertNavbarTexts(data);
    insertTabsTexts(data);
});
