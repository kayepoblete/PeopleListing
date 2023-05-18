// Exercise 2 page 93
"use strict";

let people = [
    {
    id: 1,
    firstName: "Ezra",
    lastName: "Aiden",
    email: "e.aiden@basshall.com",
    ipAddress: "18.6.24.104"
    },
    {
    id: 2,
    firstName: "Ian",
    lastName: "Auston",
    email: "ian.auston@goldmansachs.com",
    ipAddress: "17.16.4.105"
    },
    
];

window.onload = () => {
    const table = document.querySelector("#tablePeople");
    let numPeople = people.length;
    for(let i = 0; i < numPeople; i++){
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = people[i].id;
        let cell2 = row.insertCell(1);
        cell2.innerHTML = `${people[i].firstName} ${people[i].lastName}`; 
        let cell3 = row.insertCell(2);
        cell3.innerHTML = people[i].email;
        let cell4 = row.insertCell(3);
        cell4.innerHTML = people[i].ipAddress; 
    }
};