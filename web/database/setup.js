// const fs = require('fs');

// const randomNames = ["Ermuun", "Gal", "Zorigoo", "Bayanmunkh", "Sanchir", "Munkhtseren", "Tsolmon", "Batbayar", "Khatanbold", "Namuun", "Nomin", "Badrakh", "Bilegsaikhan", "Tengis", "Batdorj", "Baterdene", "Khaliun", "Undraa", "Zaya", "Ankhzaya", "Ankhbayar", "Enkhtsetseg", "Enkhtuya", "Ariunbold", "Ariunbat", "Ariunbayar", "Maralmaa", "Ujin"];

// let userIdCounter = 1;

// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomDate(startDate, endDate) {
//     return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
// }

// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     const hour = date.getHours().toString().padStart(2, '0')
//     const minute = date.getMinutes().toString().padStart(2, '0')
//     return `${year}.${month}.${day} ${hour}:${minute}`;
// }

// function getRandomEmail(){
//     const year = getRandomNumber(19,23).toString();
//     const num = getRandomNumber(1,9999).toString().padStart(4,'0');
//     return `${year}B1NUM${num}@stud.num.edu.mn`
// }

// function generateRandomUser() {
//     const userId = userIdCounter++;
//     const firstName = randomNames[Math.floor(Math.random() * randomNames.length)];
//     const lastName = randomNames[Math.floor(Math.random() * randomNames.length)];
//     const email = getRandomEmail();
//     const startDate = new Date(2023, 9, 10); // October is month 9 in JavaScript Date objects
//     const endDate = new Date(2023, 9, 30); // October is month 9 in JavaScript Date objects
//     const createdAt = formatDate(getRandomDate(startDate, endDate));

//     return { userId, firstName, lastName, email, createdAt };
// }

// const userArray = [];

// for (let i = 0; i < 200; i++) {
//     userArray.push(generateRandomUser());
// }

// const filePath = 'data.json';

// const jsonString = JSON.stringify(userArray, null, 2);

// fs.writeFileSync(filePath, jsonString);
