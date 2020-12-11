let btn = document.querySelector('button');
let table = document.querySelector('table');

let idSubIn = document.querySelector('#idSub');
let SubIn = document.querySelector('#subject');
let UnitIn = document.querySelector('#unit');
let gpaIn = document.querySelector('#gpa');

btn.addEventListener('click',() => {
    let idsub = idSubIn.value;
    let sub = SubIn.value;
    let unit = UnitIn.value;
    let gpa = gpaIn.value;

    let template = `
    <tr>
        <td>${idsub}</td>
        <td>${sub}</td>
        <td>${unit}</td>
        <td>${gpa}</td>
        <td id="ch"></td>
    </tr>`;

   table.innerHTML += template;
});
