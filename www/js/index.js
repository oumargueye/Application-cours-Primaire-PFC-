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
        
        // listItem orthographe 
        listItemOuetOu = document.getElementById('ouEtOu');
        listItemAccordAdjectif = document.getElementById("accordAdjectif");
        listItemGdur = document.getElementById("leGdur");
        listItemMotEnEuilleEtEuil = document.getElementById("motEnEuilleEtEnEuil");
        listItemEmploiDeLeursEtLeur = document.getElementById("emploiDeleursEtleur");
        listItemNomFemininEnEurEtOeur = document.getElementById("nomsFemininEnEurEtOeur");
        listItemHomonymeMaisMetMes = document.getElementById("homonymeMaisMetMes");
        listItemEmploiDeCeSeCeux = document.getElementById("EmploiDeCeSeCeux");
        
        // listItem Grammaire
        listItemGenreMasculinFemininDesNoms = document.getElementById('genreMasculinFemininDesNoms');
        listItemComplementCirconstancielDeLieu = document.getElementById('complementCirconstancielDeLieu');
        listItemAdjectifQualificatif = document.getElementById('adjectifQualificatif');
        listItemPlurielDesNomsEnAilEtAl = document.getElementById('plurielDesNomsAilEtAl');
        listItemNomCommunNomPropre = document.getElementById('nomCommunNomPropre');
        listItemAdjectifPossessif = document.getElementById('adjectifPossessif');
        listItemComplementDobjetDirect = document.getElementById('complementDobjetDirect');
             
        //Ajout des listeners D'orthographe
        listItemOuetOu.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif.addEventListener('click' , listItemAccordAdjectifAction);
        listItemGdur.addEventListener('click', listItemGdurAction);
        listItemMotEnEuilleEtEuil.addEventListener('click' , listItemMotEnEuilleEtEuilAction);
        listItemEmploiDeLeursEtLeur.addEventListener('click', listItemEmploiDeLeursEtLeurAction);
        listItemNomFemininEnEurEtOeur.addEventListener('click' , listItemNomFemininEnEurEtOeurAction);
        listItemHomonymeMaisMetMes.addEventListener('click' , listItemHomonymeMaisMetMesAction);
        listItemEmploiDeCeSeCeux.addEventListener('click' , listItemEmploiDeCeSeCeuxAction);
        btnLancerQuiz.addEventListener('click', demmarerQuiz);
        
         //Ajout des listeners de grammaire 
        listItemGenreMasculinFemininDesNoms.addEventListener('click' , listItemGenreMasculinFemininDesNomsAction);
        listItemComplementCirconstancielDeLieu.addEventListener('click' , listItemComplementCirconstancielDeLieuAction);
        listItemAdjectifQualificatif.addEventListener('click' , listItemAdjectifQualificatifAction);
        listItemPlurielDesNomsEnAilEtAl.addEventListener('click' , listItemPlurielDesNomsEnAilEtAlAction);
        listItemNomCommunNomPropre.addEventListener('click' , listItemNomCommunNomPropreAcion);
        listItemAdjectifPossessif.addEventListener('click' , listItemAdjectifPossessifAction);
        listItemComplementDobjetDirect.addEventListener('click' , listItemComplementDobjetDirectAction);
    }
   
};

app.initialize();

//Déclaration des variables
var divCours;
var divQuiz;
var btnLancerQuiz;
var btnSuivant;

// variables Orthographe 
var listItemOuetOu;
var listItemAccordAdjectif ;
var listItemGdur ;
var listItemMotEnEuilleEtEuil ;
var listItemEmploiDeLeursEtLeur ;
var listItemNomFemininEnEurEtOeur ;
var listItemHomonymeMaisMetMes ;
var listItemEmploiDeCeSeCeux ;

// variables Grammaire 
var listItemGenreMasculinFemininDesNoms ;
var listItemComplementCirconstancielDeLieu ;
var listItemAdjectifQualificatif ;
var listItemPlurielDesNomsEnAilEtAl ;
var listItemNomCommunNomPropre ;
var listItemAdjectifPossessif ;
var listItemComplementDobjetDirect ;

// variables quiz 
var quizCorrespondant;

//Fonctions  
// fonction d'orthographe 
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

// fonction Grammaire 
function listItemGenreMasculinFemininDesNomsAction(){
    changerCours(coursGrammaireGenreMasculinFeminin);
    ouvrirPageCours();
}

function listItemComplementCirconstancielDeLieuAction(){
    changerCours(coursGrammaireComplementCirconstancielDeLieu);
    ouvrirPageCours();
}

function listItemAdjectifQualificatifAction(){
    changerCours(coursGrammaireAdjectifQualificatif);
    ouvrirPageCours();
}

function listItemPlurielDesNomsEnAilEtAlAction(){
    changerCours(coursGrammairePlurielDesNomsEnAilEtEnAl);
    ouvrirPageCours();
}

function listItemNomCommunNomPropreAcion(){
    changerCours(coursGrammaireNomCommunNomPropre);
    ouvrirPageCours();
}

function listItemAdjectifPossessifAction(){
    changerCours(coursGrammaireAdjectifPossessif);
    ouvrirPageCours();
}

function listItemComplementDobjetDirectAction(){
    changerCours(coursGrammaireComplementDobjetDirect);
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

