
// display input box for title if others are selected

function checkJobRole(val){
    const element=document.getElementById('other-title');
    if (val === 'other')
        element.style.display = 'inherit';
    else
        element.style.display = 'none';
}


//let colorOptions = document.querySelector("option[value='cornflowerblue']");
//console.log("colorOptions" + colorOptions);

function designOption(val){
    let elementColor;
    elementColor = document.getElementById('shirt-colors');
    const jsPunsShirts = document.getElementsByClassName('js-puns-shirt');
    console.log("jsPunsShirts" + jsPunsShirts);

    if (val === 'js puns') {
        elementColor.style.display = 'inherit';
        for (let i = 0; i < jsPunsShirts.length; i++) {
            jsPunsShirts[i].style.display = 'inherit';
        }
    } else if (val === 'heart js') {
        elementColor.style.display = 'inherit';
    } else {
        elementColor.style.display = 'none';
    }
}



//colorOptions.hidden = true;


