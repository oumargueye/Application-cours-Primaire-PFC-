
var quizPosition = 0;

function chargerQuestion() {
    var questionAtPosition = quizCorrespondant[questionAtPosition];
}

function demmarerQuiz() {
    quizPosition = 0;
    chargerQuestion();
    ouvrirPageQuiz();
}

function ouvrirPageQuiz() {
    $.mobile.changePage('#pageQuiz');
}