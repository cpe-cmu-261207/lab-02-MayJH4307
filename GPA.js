let btn = document.querySelector('button');
let sm = document.querySelector('#submit');
let table = document.querySelector('table');

let idSubIn = document.querySelector('#idSub');
let SubIn = document.querySelector('#subject');
let UnitIn = document.querySelector('#unit');
let gpaIn = document.querySelector('#gpa');

var InId =0,InUnit=0,InGpa=0;
var major=0,ge=0;
var countmajor =0,countge =0;
var gpamajor = 0,gpaall =0;
var a =1;

btn.addEventListener('click',() => {
    if(idSubIn.value == '' || SubIn.value == '' || UnitIn.value == ''
    || gpaIn.value == '') ;
    else {
            let idsub = idSubIn.value;
            let sub = SubIn.value;
            let unit = UnitIn.value;
            let gpa = gpaIn.value;

            InId = Math.floor((idsub/1000));
            InUnit = UnitIn.value;
            InGpa = gpaIn.value;

            let template = `
            <tr>
                <td id="setco">${idsub}</td>
                <td id="setco">${sub}</td>
                <td id="setco">${unit}</td>
                <td id="setco">${gpa}</td>
                <td id="ch"></td>
            </tr>`;

        table.innerHTML += template;
        idSubIn.value = '';
        SubIn.value = '';
        UnitIn.value = '';
        gpaIn.value = '';

        if(InId == 261||InId == 269){
                major += InGpa*InUnit; 
                countmajor += InUnit*a;
                document.getElementById("setco").style.backgroundColor = "#86F3F8";
                //document.getElementsByClassName('setco').style.backgroundColor = "#86F3F8";
                //document.querySelectorAll('#setco').getElementById("setco").style.backgroundColor = "red";
        }else {
                ge += InGpa*InUnit;
                countge += InUnit*a;
        }
    }
    

});

sm.addEventListener('click' ,() => {
    gpamajor = major/countmajor;
    gpaall = (major+ge)/(countge+countmajor);
    let tem = `
            <tr>
                <td>Grade Major : </td>
                <td>${gpamajor.toFixed(2)}</td>
                <td>GPA : </td>
                <td>${gpaall.toFixed(2)}</td>
            </tr>
                
    `;
    table.innerHTML += tem;
});
