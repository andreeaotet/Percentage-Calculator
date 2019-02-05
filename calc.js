var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');
var form2 = document.getElementById('calcOptions');
var calcAns = document.getElementById('calculatorAnswer');

form2.addEventListener('click', changeCalcTopic);
function changeCalcTopic() {
    var newTopic = "";
    var topicOption = document.getElementById('select').value;

    if (topicOption == 1) {
        newTopic = "What is Y% of X?";
    } else if (topicOption == 2) {
        newTopic = "X is Y% of what?";
    } else if (topicOption == 3) {
        newTopic = "What % of X is Y?";
    } else if (topicOption == 4) {
        newTopic = "X% of what is Y?";
    } else if (topicOption == 5) {
        newTopic = "X is what % of Y?"
    } else {
        newTopic = "";
    }

    var calcTopic = document.getElementById('calcTopic');
    calcTopic.innerText = newTopic;
};

changeCalcTopic();


form.addEventListener('submit', function (event) {
    var topicOption = document.getElementById('select').value;
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else if (topicOption == 5) {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    } else if (topicOption == 1) {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result2 = y * x;
        var final = result2 / 100;

        resultField.innerText = "Answer: " + final;
        event.preventDefault();
    } else if (topicOption == 2) {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result3 = x / y;
        var percent2 = result3 * 100;

        resultField.innerText = "Answer: " + percent2;
        event.preventDefault();
    } else if (topicOption == 3) {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result4 = y / x;
        var percent3 = result4 * 100

        resultField.innerText = "Answer: " + percent3 + "%";
        event.preventDefault();
    } else if (topicOption == 4) {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result5 = y / x;
        var final2 = result5 * 100;

        resultField.innerText = "Answer: " + final2;
        event.preventDefault();
    }
});


function resetCalculator(form) {
    // clearing inputs
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].type) {
            case 'number':
            case 'text':
                inputs[i].value = '';
                break;
            case 'radio':
            case 'checkbox':
                inputs[i].checked = false;
        }
    }

    if (typeof (resultField) != 'undefined' && resultField != null) {
        // exists
        calcAns.innerHTML = 'Answer:<br><br>';
    };
    // return false;
};

