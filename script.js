let card_number = document.getElementById('card-number');
let card_name = document.getElementById('name');
let card_date = document.getElementById('date');
let card_cvc = document.getElementById('cvc');

let inp_number = document.getElementById('card-num-inp');
let inp_name = document.getElementById('name-inp');
let inp_month = document.getElementById('month');
let inp_year = document.getElementById('year');
let inp_cvc = document.getElementById('card-cvc');

inp_number.addEventListener('input', cardNumber);
inp_name.addEventListener('input', cardName);
inp_cvc.addEventListener('input', cardCVC);

inp_month.addEventListener('input', cardDate);
inp_year.addEventListener('input', cardDate);


function cardNumber(e) {
    card_number.innerHTML = format(e.target.value);
}

function cardName() {
    card_name.innerHTML = inp_name.value;
}

function cardDate() {
    card_date.innerHTML = inp_month.value + '/' + inp_year.value;
}

function cardCVC() {
    card_cvc.innerHTML = inp_cvc.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}