"use strict";
// 3)

const tbody = document.querySelector('tbody');

const fourthTr = tbody.children[3];

const td = fourthTr.children[1];

td.innerHTML = '<td>04.04.2021<td>';

// 4) 

function randomSale() {
    const random = Math.ceil(Math.random()*3);
    const result = tbody.children[random];
    result.setAttribute('style', 'background-color: green');
    const sale = result.children[0];
    let newSale = sale.textContent += ' Скидка';
}

randomSale();