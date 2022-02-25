"use strict";
// 1)
function getValue() {
    const link = document.getElementById("w3r");

    const href = link.getAttribute('href');
    const hreflang = link.getAttribute('hreflang');
    const rel = link.getAttribute('rel');
    const target = link.getAttribute('target');
    const type = link.getAttribute('type');

    const result = [href, hreflang, rel, target, type];
    return result;
}

const funcResult = getValue();
console.log(funcResult);