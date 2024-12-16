const lengthp = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const passinp = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');


let password = '';
let string = '';

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generate.addEventListener("click" , () => {

    if(upper.checked) {
        string +=uppercasestr;
    }

    if(lower.checked) {
        string +=lowercasestr;
    }

    if(number.checked) {
        string +=numberstr;
    }

    if(symbol.checked) {
        string +=symbolstr;
    }

    console.log(string);

    for(let i =0; i<lengthp.value; i++) {
        let index = Math.floor(Math.random() * string.length);
        password +=string[index];

    }

    passinp.value = password;
    passinp.style.fontSize = "18px";
    passinp.style.fontStyle = "italic";
    passinp.style.color = "blue";
    generate.disabled = true;
    
});

copy.addEventListener("click" , () => {

    if(passinp.value === "") {
        alert("Generate Password First Please");
    }

    else {
        const newele = document.createElement('textarea');
         newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();

    }

});
































