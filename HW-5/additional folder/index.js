/*systems u subsystems i texter@ himnakan site i vra chkaroxaca avelacnel*/
/*es arancin html file i vra avelacreci, uzum ei ays cevov avelacnel himnakan html file is mej bayc chkaroxaca*/
"use strict";
const table = document.querySelector('.table');
const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const insertSystemsTexts = ({systems}) => {
    systems.forEach(system => {
        const systemsContainer = document.querySelector('.systems-container')
        .content.cloneNode(true);

        const tableRow = systemsContainer.querySelector('.table-row')
        const values = Object.values(system);

        for(let i = 0; i < tableRow.children.length; i++) {
            tableRow.children[i].innerHTML = values[i];
        }

        table.append(systemsContainer);
    });
}

const insertSubsystemsTexts = ({subsystems}) => {
    subsystems.forEach(subsystem => {
        const subsystemsContainer = document.querySelector('.subsystems-container')
        .content.cloneNode(true);

        const licenses = subsystemsContainer.querySelector('.licenses');
        const expires = subsystemsContainer.querySelector('.expires');

        licenses.innerHTML = subsystem.licenses;
        expires.innerHTML = subsystem.expires;

        table.append(subsystemsContainer);
    })
}

fetchData("./test-data.json").then((data) => {
  const { tabs } = data;
  tabs.forEach(tab => {
    const dataLength = Object.keys(tab.data).length;
    if (dataLength) {  
        insertSystemsTexts(tab.data);
        insertSubsystemsTexts(tab.data);
    }
  })
})
