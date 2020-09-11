let totalCost = 0;

// display input box for title if others are selected

function checkJobRole(val){
    const element=document.getElementById('other-title');
    if (val === 'other')
        element.style.display = 'inherit';
    else
        element.style.display = 'none';
}



// display the options elements for the shirts
function designOption(val){
    let elementColor;
    elementColor = document.getElementById('shirt-colors');
    const jsPunsShirts = document.getElementsByClassName('js-puns-shirt');
    const jsShirt = document.getElementsByClassName('js-shirt');

    if (val === 'js puns') {

        // Make all the others invisible
        for (let i = 0; i < jsShirt.length; i++) {
            jsShirt[i].style.display = 'none';
        }
        // Display proper elements
        elementColor.style.display = 'inherit';
        for (let i = 0; i < jsPunsShirts.length; i++) {
            jsPunsShirts[i].style.display = 'inherit';
        }
    } else if (val === 'heart js') {

        // Make all the other hidden.
        for (let i = 0; i < jsPunsShirts.length; i++) {
            jsPunsShirts[i].style.display = 'none';
        }

        // Display proper elements
        elementColor.style.display = 'inherit';
        for (let i = 0; i < jsShirt.length; i++) {
            jsShirt[i].style.display = 'inherit';
        }
    } else {
        elementColor.style.display = 'none';
    }
}

//colorOptions.hidden = true;

/* Variable to store all the checkboxes
 */
const checkboxes = document.querySelectorAll('.activities input');

// Event listener for checkboxes
document.querySelector('.activities').addEventListener('change', (e) => {

    let clicked = e.target;
    let clickedType = clicked.getAttribute('data-day-and-time');
    for ( let i = 0; i < checkboxes.length; i++ ) {
        let checkboxType = checkboxes[i].getAttribute('data-day-and-time');

        // disabling other checkboxes if the attribute 'data-day-and-time' is the same
        if (clickedType === checkboxType && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }

    let checkboxCost = clicked.getAttribute('data-cost');

    if (clicked.checked === false) {
        totalCost -= parseInt(checkboxCost);
    } else {
        totalCost += parseInt(checkboxCost);
    }

    let total = document.getElementById('total-amount');
    total.textContent = "Total: $" + totalCost;


    let activities = document.getElementById('activities');
    activities.appendChild(total);
});


const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
payPal.style.display = 'none';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';
const paymentMethod = document.getElementById("payment");
console.log('paymentMethod ' + paymentMethod);

paymentMethod.addEventListener('change', (e) => {
    let selected = e.target.value;
    if (selected === 'paypal') {
        creditCard.style.display = 'none';
        payPal.style.display = 'inherit';
        bitcoin.style.display = 'none';
    } else if (selected === 'bitcoin') {
        bitcoin.style.display = 'inherit';
        payPal.style.display = 'none';
        creditCard.style.display = 'none';
    } else if (selected === 'credit card') {
        bitcoin.style.display = 'none';
        payPal.style.display = 'none';
        creditCard.style.display = 'inherit';
    }
});








