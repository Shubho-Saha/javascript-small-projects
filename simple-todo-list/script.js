// console.log('simple todo list');

const list = document.querySelector("#list");
const form = document.querySelector("#input-form");
const input = document.querySelector("#input");

form.addEventListener('submit', e => {
    e.preventDefault();
    let listItem = document.createElement("div");
    listItem.classList.add('list-item');
    listItem.innerText = input.value;

    list.appendChild(listItem);
    input.value = ''

    listItem.addEventListener('click', ()=> {
        list.removeChild(listItem);
    })

    console.log(listItem);
})