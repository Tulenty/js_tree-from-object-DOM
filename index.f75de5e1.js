"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector("#tree");
function createTree(element, data) {
    const ul = document.createElement("ul");
    for(const key in data)if (data.hasOwnProperty(key)) {
        const li = document.createElement("li");
        li.textContent = key;
        if (typeof data[key] === "object" && data[key] !== null) createTree(li, data[key]);
        ul.appendChild(li);
    }
    if (ul.children.length > 0) element.appendChild(ul);
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
