


document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();
    let count = document.querySelector('#count').value;
    let isLower1 = document.querySelector('#isLower').checked;
    let isUpper1 = document.querySelector('#isUpper').checked;
    let isNumber1 = document.querySelector('#isNumber').checked;
    let isSymb1 = document.querySelector('#isSymb').checked;
    let yourVers1 = document.querySelector('#yourVers').checked;

    

    let result = generationString(count, isNumber1, isUpper1, isLower1, isSymb1, yourVers1);
    
    document.querySelector('#result').value = result;

})


function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function myReset() {
    if (document.querySelector('#isLower').checked ||  document.querySelector('#isUpper').checked || document.querySelector('#isNumber').checked || document.querySelector('#isSymb').checked) {
        document.querySelector('#yourVers').checked = false;
        document.querySelector('#myResult').hidden = true; 
        document.querySelector('#button').disabled = false;
    } else {
        document.querySelector('#button').disabled = true;
    }
}

function create() {
    if(document.querySelector('#yourVers').checked == true) {
        document.querySelector('#isLower').checked = false;
        document.querySelector('#isUpper').checked = false;
        document.querySelector('#isNumber').checked = false;
        document.querySelector('#isSymb').checked = false;
    
        document.querySelector('#button').disabled = false;
        document.querySelector('#myResult').hidden = false;
    } else {
        document.querySelector('#button').disabled = true;
        document.querySelector('#myResult').hidden = true; 
    }

}
function generationString(count, isNumber1, IsUpper1, IsLower1, isSymb1, yourVers1) {
    let str = "";
    let lower = "qwertyuioplkjhgfdsazxcvbnm";
    let upper = lower.toUpperCase();
    let number = "1234567890";
    let symb = "!@#$%^&*()_+}{:?";   
    let myResult = document.querySelector('#myResult');
    let mySelect = myResult.value;
    if (!isNumber1 && !isSymb1 && !IsLower1 && !IsUpper1 && !yourVers1) {
        console.log("Error");
        return "Not select";
    } 
    if ((isNumber1 || isSymb1 || IsLower1 || IsUpper1) && !yourVers1){
        for (let i = 0; i < count;) {
            console.log('da');
            let random = Random(0, 4);
            if (random == 0 && isNumber1) {
                str += number[Random(0, number.length)];
                i++
            } else if (random == 1 && IsLower1) {
                str += lower[Random(0, lower.length)];
                i++
            } else if (random == 2 && IsUpper1) {
                str += upper[Random(0, upper.length)];
                i++
            } else if (random == 3 && isSymb1) {
                str += symb[Random(0, symb.length)];
                i++
            } 
        }
    }
    if (!isNumber1 && !isSymb1 && !IsLower1 && !IsUpper1 && yourVers1) {
        for (let i = 0; i < mySelect.length;) {
            str += mySelect[Random(0, mySelect.length)];
            i++;
        }
    }

return str;

}
