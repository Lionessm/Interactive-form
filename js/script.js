let totalCost = 0;
const otherTitle= document.getElementById('other-title');
otherTitle.style.display = 'none';
console.log('ajunge aici');
// display input box for title if 'others' option is selected:

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

        // Make all the other hidden
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


const checkboxes = document.querySelectorAll('.activities input');

// Event listener for checkboxes:
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

    //The total cost of the selected activities:
    let checkboxCost = clicked.getAttribute('data-cost');

    // Adding or subtracting the checkbox sum, when checkbox is checked or unchecked
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

// Payment options validating section.
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
payPal.style.display = 'none';
const bitcoin = document.getElementById('bitcoin');
bitcoin.style.display = 'none';
const paymentMethod = document.getElementById("payment");
console.log('paymentMethod ' + paymentMethod);

//Display the payment options: the credit card option is displayed by default, the others are displayed when selected

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

//Name field, email and activities cannot be blank. Selecting the nodes of these elements:
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const activitiesContainer = document.querySelector("#activities");
const activitiesInput = document.querySelectorAll("#activities input");

//Function that validates if the name has more than 1 character
function nameValidator () {
    let nameValue = name.value;

    if (nameValue.length > 0) {
        name.style.border = '1px solid white';
        return true;
    } else {
        name.style.border = '2px solid red';
        return false;
    }

}

//Function that validates if the email has an '@' character and a '.' character:
function emailValidator () {
    let emailValue = email.value;
    let indexValue = emailValue.indexOf(`@`);
    let lastIndexValue = emailValue.lastIndexOf(`.`);
    if (indexValue > 1 && lastIndexValue > indexValue + 1) {
        email.style.border = '1px solid white';
        return true;
    } else {
        email.style.border = '2px solid red';
        return false;
    }
}

//Function that validates if at least one of the activities has been checked:
function activitiesValidator (){
    for (let i = 0; i < activitiesInput.length; i++) {
        if (activitiesInput[i].checked) {
            activitiesContainer.style.border = '1px solid white';
            return true;
        }
    }
    activitiesContainer.style.border = '2px solid red';
}

//Function that validates the payment input (for card number, zipcode and cvv) if the credit card option was selected:
function paymentValidator(){
    let creditCardNumber = document.getElementById('cc-num');
    let zipCode = document.getElementById('zip');
    let cvv = document.getElementById('cvv');
    let creditCardNumberValue = creditCardNumber.value;
    let zipCodeValue = zipCode.value;
    let cvvValue = cvv.value;

    let response = true;
    // validating card number and displaying change (red border) if card number is invalid (not 13-16 digits)
    if (creditCardNumberValue.length >= 13 && creditCardNumberValue.length <= 16 && Number.isInteger(parseInt(creditCardNumberValue))) {
        creditCardNumber.style.border = '1px solid white';
    } else {
        creditCardNumber.style.border = '2px solid red';
        response = false;
        console.log("Credit card validation fail");
    }
    // validating zipcode and displaying change (red border) if zipcode is invalid (not 5 digits)
   if (zipCodeValue.length === 5 && Number.isInteger(parseInt(zipCodeValue))) {
       zipCode.style.border = '1px solid white';
   } else {
       zipCode.style.border = '2px solid red';
       response = false;
       console.log("Zipcode validation failed");
   }

   // validating cvv and displaying change (red border) if cvv is invalid (not 3 digits)
   if (cvvValue.length === 3 && Number.isInteger(parseInt(cvvValue))) {
       cvv.style.border = '1px solid white';
   } else {
       cvv.style.border = '2px solid red';
       response = false;
       console.log("Cvv validation failed");
   }

   return response;
}

//Checking when the submit button is clicked if the name, email, activities and payment methods have valid inputs
//by calling the functions created above:
form.addEventListener('submit', (e) => {
    if (!nameValidator()) {
        e.preventDefault();
        console.log('Name validator prevented submission');
    }

    if (!emailValidator()) {
        e.preventDefault();
        console.log('Email validator prevented submission');
    }

    if (!activitiesValidator()) {
        e.preventDefault();
        console.log('Activities validator prevented submission');
    }

    if (paymentMethod.value === 'credit card') {
        if (paymentValidator() === false) {
            e.preventDefault();
            console.log('paymentvalidator prevented submission');
        }
    }

});




