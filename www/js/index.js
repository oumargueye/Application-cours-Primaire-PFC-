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
        listItemGdur = document.getElementById("leGdur");
        listItemMotEnEuilleEtEuil = document.getElementById("motEnEuilleEtEnEuil");
        listItemEmploiDeLeursEtLeur = document.getElementById("emploiDeleursEtleur");
        listItemNomFemininEnEurEtOeur = document.getElementById("nomsFemininEnEurEtOeur");
        listItemHomonymeMaisMetMes = document.getElementById("homonymeMaisMetMes");
        listItemEmploiDeCeSeCeux = document.getElementById("EmploiDeCeSeCeux");
             
        //Ajout des listeners
        listItemOuetOu.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif.addEventListener('click' , listItemAccordAdjectifAction);
        listItemGdur.addEventListener('click', listItemGdurAction);
        listItemMotEnEuilleEtEuil.addEventListener('click' , listItemMotEnEuilleEtEuilAction);
        listItemEmploiDeLeursEtLeur.addEventListener('click', listItemEmploiDeLeursEtLeurAction);
        listItemNomFemininEnEurEtOeur.addEventListener('click' , listItemNomFemininEnEurEtOeurAction);
        listItemHomonymeMaisMetMes.addEventListener('click' , listItemHomonymeMaisMetMesAction);
        listItemEmploiDeCeSeCeux.addEventListener('click' , listItemEmploiDeCeSeCeuxAction);
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
var listItemGdur ;
var listItemMotEnEuilleEtEuil ;
var listItemEmploiDeLeursEtLeur ;
var listItemNomFemininEnEurEtOeur ;
var listItemHomonymeMaisMetMes ;
var listItemEmploiDeCeSeCeux ;
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

function listItemGdurAction(){
    changerCours(coursGdur);
    ouvrirPageCours();
}

function listItemMotEnEuilleEtEuilAction(){
    changerCours(coursMotEnEuilleEtEuil);
    ouvrirPageCours();
}

function listItemEmploiDeLeursEtLeurAction(){
    changerCours(coursEmploiDeLeursEtLeur);
    ouvrirPageCours();
}

function listItemNomFemininEnEurEtOeurAction(){
    changerCours(coursNomFemininEnEurEtOeur);
    ouvrirPageCours();
}

function listItemHomonymeMaisMetMesAction(){
    changerCours(coursHomonymesMaisMetMes);
    ouvrirPageCours();
}

function listItemEmploiDeCeSeCeuxAction(){
    changerCours(coursEmploiDeCeSeEtCeux);
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

