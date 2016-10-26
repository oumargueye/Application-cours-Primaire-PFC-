var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //initialisation des variables
        divCours = document.getElementById('divCours');
        divQuiz = document.getElementById('divQuiz');
        btnLancerQuiz = document.getElementById('btnLancerQuiz');
        btnSuivant = document.getElementById('btnSuivant');
        
        listItemOuetOu = document.getElementById('ouEtOu');
        listItemAccordAdjectif = document.getElementById("accordAdjectif");
             
        //Ajout des listeners
        listItemOuetOu.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif.addEventListener('click' , listItemAccordAdjectifAction);
        btnLancerQuiz.addEventListener('click', demmarerQuiz);
    }
   
};

app.initialize();

//Déclaration des variables
var divCours;
var divQuiz;
var btnLancerQuiz;
var btnSuivant;

var listItemOuetOu;
var listItemAccordAdjectif ;
var quizCorrespondant;

//Fonctions  

function listItemOuetOuAction() {
    changerCours(coursOuetOuAvecAcent);
    quizCorrespondant = quizOuetOu;
    ouvrirPageCours();
}

function listItemAccordAdjectifAction(){
    changerCours(coursAccordDeLadjectifQualif);
    ouvrirPageCours();
}


function ouvrirPageCours(){
   $.mobile.changePage('#pageCours', {transition: "slide"});  
}

function changerCours(nouveauCours) {
    changerTxt(nouveauCours, divCours);
} 

function changerTxt(texte, idChamps) {
    idChamps.innerHTML = texte;
}

