let form = document.getElementById('form');
let thank = document.getElementById('thank');

let card_number = document.getElementById('card-number');
let card_name = document.getElementById('name');
let card_date = document.getElementById('date');
let card_cvc = document.getElementById('cvc');

let inp_number = document.getElementById('card-num-inp');
let inp_name = document.getElementById('name-inp');
let inp_month = document.getElementById('month');
let inp_year = document.getElementById('year');
let inp_cvc = document.getElementById('card-cvc');

let submit = document.getElementById('submit');
let continue_btn = document.getElementById('continue');

submit.addEventListener('click', handleSubmit);
continue_btn.addEventListener('click', resetFun);

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

function resetFun(e) {
    form.style.display = 'flex';
    thank.style.display = 'none';

    inp_name.value = "";
    inp_number.value = "";
    inp_month.value = "";
    inp_year.value = "";
    inp_cvc.value = "";

    card_number.innerHTML = "0000 0000 0000 0000";
    card_name.innerHTML = "jane appleseed";
    card_date.innerHTML = "00/00";
    card_cvc.innerHTML = "000";
}

function handleSubmit(e) {
    e.preventDefault();

    if(!inp_name.value) {
        inp_name.parentElement.classList.add('error_message');
        inp_name.classList.add('error-border');
        inp_name.style.marginBottom = '0.4rem';
    } else {
        inp_name.parentElement.classList.remove('error_message');
        inp_name.classList.remove('error-border');
        inp_name.style.marginBottom = '1.4rem';
    }

    if(!inp_number.value) {
        inp_number.parentElement.classList.add('error_message');
        inp_number.classList.add('error-border');
        inp_number.style.marginBottom = '0.4rem';
    } else if(!/^\d+$/.test(inp_number.value)) {
        inp_number.parentElement.classList.add('wrong-format');
        inp_number.parentElement.classList.remove('error_message');
    } else {
        inp_number.parentElement.classList.remove('error_message');
        inp_number.parentElement.classList.remove('wrong-format');
        inp_number.classList.remove('error-border');
        inp_number.style.marginBottom = '1.4rem';
    }

    if(!inp_month.value) {
        inp_month.parentElement.classList.add('error_message');
        inp_month.classList.add('error-border');
        inp_month.style.marginBottom = '0.4rem';
    } else if(!/^\d+$/.test(inp_month.value)) {
        inp_month.parentElement.classList.add('wrong-format');
        inp_month.parentElement.classList.remove('error_message');
    } else {
        inp_month.parentElement.classList.remove('error_message');
        inp_month.parentElement.classList.remove('wrong-format');
        inp_month.classList.remove('error-border');
        inp_month.style.marginBottom = '1.4rem';
    }

    if(!inp_year.value) {
        inp_year.parentElement.classList.add('error_message');
        inp_year.classList.add('error-border');
        inp_year.style.marginBottom = '0.4rem';
    } else if(!/^\d+$/.test(inp_year.value)) {
        inp_year.parentElement.classList.add('wrong-format');
        inp_year.parentElement.classList.remove('error_message');
    } else {
        inp_year.parentElement.classList.remove('error_message');
        inp_year.parentElement.classList.remove('wrong-format');
        inp_year.classList.remove('error-border');
        inp_year.style.marginBottom = '1.4rem';
    }

    if(!inp_cvc.value) {
        inp_cvc.parentElement.classList.add('error_message');
        inp_cvc.classList.add('error-border');
        inp_cvc.style.marginBottom = '0.4rem';
    } else if(!/^\d+$/.test(inp_cvc.value)) {
        inp_cvc.parentElement.classList.add('wrong-format');
        inp_cvc.parentElement.classList.remove('error_message');
    } else {
        inp_cvc.parentElement.classList.remove('error_message');
        inp_cvc.parentElement.classList.remove('wrong-format');
        inp_cvc.classList.remove('error-border');
        inp_cvc.style.marginBottom = '1.4rem';
    }

    if(!inp_name.value && !inp_number.value && !inp_month.value && !inp_year.value && !inp_cvc.value) {
        form.style.paddingBottom = '40px';
    }

    if(inp_name.value && inp_number.value && inp_month.value && inp_year.value && inp_cvc.value) {
        form.style.display = 'none';
        thank.style.display = 'flex';
    }
}