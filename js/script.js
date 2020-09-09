
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


