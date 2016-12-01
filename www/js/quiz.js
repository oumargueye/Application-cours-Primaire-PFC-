
var quizPosition = 0;
var quizDernierPosition = 0;
var points = 0;


function chargerQuiz() {
    var questionAtPosition = quizCorrespondant[questionAtPosition];
    quizDernierPosition = quizCorrespondant.length;
}

function demmarerQuiz() {
    quizPosition = 0;
    points = 0;
    chargerQuiz();
    chargerQuestion(quizPosition);
    ouvrirPageQuiz();
}

function questionSuivant() {
    if (!verifierReponse(quizPosition)) {
        alert("Veuillez faire un choix !");
        return 0;
    }

    quizPosition++;
    if (quizPosition === quizDernierPosition) {
        alert("Résulat: " + points + "/" + quizDernierPosition);
    } else {
        chargerQuestion(quizPosition);
        $('input[type="radio"]').checkboxradio("refresh");
    }
}

function chargerQuestion(numero) {
    var question = quizCorrespondant[numero];
    var length = question.length;

    var numbers = generateNumbers(length - 1);

    hideAllRadio();
    if (length > 1) {
        $("#labelChoix1").show();
        $("#labelChoix1").html(question[numbers[0]]);
        $("#r1").val(question[numbers[0]]);
    }
    if (length > 2) {
        $("#labelChoix2").show();
        $("#labelChoix2").html(question[numbers[1]]);
        $("#r2").val(question[numbers[1]]);
    }
    if (length > 3) {
        $("#labelChoix3").show();
        $("#labelChoix3").html(question[numbers[2]]);
        $("#r3").val(question[numbers[2]]);
    }
    if (length > 4) {
        $("#labelChoix4").show();
        $("#labelChoix4").html(question[numbers[3]]);
        $("#r4").val(question[numbers[3]]);
    }
    divQuiz.innerHTML = question[0];
}

function verifierReponse(numero) {
    var question = quizCorrespondant[numero];
    if (r1.checked) {
        comparerReponseEtAfficher(r1.value, question[1]);
        return true;
    } else if (r2.checked) {
        comparerReponseEtAfficher(r2.value, question[1]);
        return true;
    } else if (r3.checked) {
        comparerReponseEtAfficher(r3.value, question[1]);
        return true;
    } else if (r4.checked) {
        comparerReponseEtAfficher(r4.value, question[1]);
        return true;
    } else {
        return false;
    }
}

function comparerReponseEtAfficher(reponseChoisie, reponseCorrecte) {
    if (reponseChoisie === reponseCorrecte) {
        alert('Bonne réponse');
        points++;
    } else {
        alert('Mauvaise réponse');
    }
}

function hideAllRadio() {
    $('input[type="radio"]').prop('checked', false);
    
//    $('#r5').click();
//    $('#r5').hide();
//    $("#labelChoix5").click();
//    $("#labelChoix5").hide();
    
    $("#r1").hide();
    $("#labelChoix1").hide();
    $("#r2").hide();
    $("#labelChoix2").hide();
    $("#r3").hide();
    $("#labelChoix3").hide();
    $("#r4").hide();
    $("#labelChoix4").hide();
    
}

function ouvrirPageQuiz() {
    $.mobile.changePage('#pageQuiz');
}

function generateNumbers(maxValue) {
    var count = 0;
    var numbers = [];

    while (count < maxValue) {
        var val = Math.floor(Math.random() * maxValue) + 1;
        if (!(numbers.indexOf(val) >= 0)) {
            numbers.push(val);
            count++;
        }
    }

    return numbers;
}

var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");
var r4 = document.getElementById("r4");