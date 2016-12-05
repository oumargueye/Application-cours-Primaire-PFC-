var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
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
        listItemComplementDobjetIndirect = document.getElementById('complementDobjetInDirect');

        // listItem Vocabulaire 
        listItemradicaux = document.getElementById('radicaux');
        listItemPrefixe = document.getElementById('prefixe');
        listItemSuffixe = document.getElementById('suffixe');
        listItemChampLexical = document.getElementById('champLexical');
        listItemSynonymie = document.getElementById('synonymie');
        listItemAntonymie = document.getElementById('antonymie');
        listItemHomonymie = document.getElementById('homonymie');
        listItemParonymie = document.getElementById('paronymie');

        // listItem Grammaire(panel)
        listItemGenreMasculinFemininDesNoms2 = document.getElementById("genreMasculinFemininDesNoms2");
        listItemComplementCirconstancielDeLieu2 = document.getElementById("complementCirconstancielDeLieu2");
        listItemAdjectifQualificatif2 = document.getElementById('adjectifQualificatif2');
        listItemPlurielDesNomsAilEtAl2 = document.getElementById('plurielDesNomsAilEtAl2');
        listItemNomCommunNomPropre2 = document.getElementById('nomCommunNomPropre2');
        listItemAdjectifPossessif2 = document.getElementById('adjectifPossessif2');
        listItemComplementDobjetDirect2 = document.getElementById('complementDobjetDirect2');
        listItemComplementDobjetInDirect2 = document.getElementById('complementDobjetInDirect2');
        
        // listItem Grammaire(panel2)
        listItemGenreMasculinFemininDesNoms3 = document.getElementById("genreMasculinFemininDesNoms3");
        listItemComplementCirconstancielDeLieu3 = document.getElementById("complementCirconstancielDeLieu3");
        listItemAdjectifQualificatif3 = document.getElementById('adjectifQualificatif3');
        listItemPlurielDesNomsAilEtAl3 = document.getElementById('plurielDesNomsAilEtAl3');
        listItemNomCommunNomPropre3 = document.getElementById('nomCommunNomPropre3');
        listItemAdjectifPossessif3 = document.getElementById('adjectifPossessif3');
        listItemComplementDobjetDirect3 = document.getElementById('complementDobjetDirect3');
        listItemComplementDobjetInDirect3 = document.getElementById('complementDobjetInDirect3');

        // listItem Orthographe(panel)
        listItemOuEtOu2 = document.getElementById('ouEtOu2');
        listItemAccordAdjectif2 = document.getElementById('accordAdjectif2');
        listItemLeGdur2 = document.getElementById('leGdur2');
        listItemMotEnEuilleEtEnEuil2 = document.getElementById('motEnEuilleEtEnEuil2');
        listItemEmploiDeleursEtleur2 = document.getElementById('emploiDeleursEtleur2');
        listItemNomsFemininEnEurEtOeur2 = document.getElementById('nomsFemininEnEurEtOeur2');
        listItemHomonymeMaisMetMes2 = document.getElementById('homonymeMaisMetMes2');
        listItemEmploiDeCeSeCeux2 = document.getElementById('EmploiDeCeSeCeux2');
        
        // listItem Orthographe(panel2)
        listItemOuEtOu3 = document.getElementById('ouEtOu3');
        listItemAccordAdjectif3 = document.getElementById('accordAdjectif3');
        listItemLeGdur3 = document.getElementById('leGdur3');
        listItemMotEnEuilleEtEnEuil3 = document.getElementById('motEnEuilleEtEnEuil3');
        listItemEmploiDeleursEtleur3 = document.getElementById('emploiDeleursEtleur3');
        listItemNomsFemininEnEurEtOeur3 = document.getElementById('nomsFemininEnEurEtOeur3');
        listItemHomonymeMaisMetMes3 = document.getElementById('homonymeMaisMetMes3');
        listItemEmploiDeCeSeCeux3 = document.getElementById('EmploiDeCeSeCeux3');

        // listItem vocabulaire(panel)
        listItemradicaux2 = document.getElementById('radicaux2');
        listItemprefixe2 = document.getElementById('prefixe2');
        listItemsuffixe2 = document.getElementById('suffixe2');
        listItemchampLexical2 = document.getElementById('champLexical2');
        listItemsynonymie2 = document.getElementById('synonymie2');
        listItemantonymie2 = document.getElementById('antonymie2');
        listItemhomonymie2 = document.getElementById('homonymie2');
        listItemparonymie2 = document.getElementById('paronymie2');
        
         // listItem vocabulaire(panel2)
        listItemradicaux3 = document.getElementById('radicaux3');
        listItemprefixe3 = document.getElementById('prefixe3');
        listItemsuffixe3 = document.getElementById('suffixe3');
        listItemchampLexical3 = document.getElementById('champLexical3');
        listItemsynonymie3 = document.getElementById('synonymie3');
        listItemantonymie3 = document.getElementById('antonymie3');
        listItemhomonymie3 = document.getElementById('homonymie3');
        listItemparonymie3 = document.getElementById('paronymie3');

        //Ajout des listeners D'orthographe
        listItemOuetOu.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif.addEventListener('click', listItemAccordAdjectifAction);
        listItemGdur.addEventListener('click', listItemGdurAction);
        listItemMotEnEuilleEtEuil.addEventListener('click', listItemMotEnEuilleEtEuilAction);
        listItemEmploiDeLeursEtLeur.addEventListener('click', listItemEmploiDeLeursEtLeurAction);
        listItemNomFemininEnEurEtOeur.addEventListener('click', listItemNomFemininEnEurEtOeurAction);
        listItemHomonymeMaisMetMes.addEventListener('click', listItemHomonymeMaisMetMesAction);
        listItemEmploiDeCeSeCeux.addEventListener('click', listItemEmploiDeCeSeCeuxAction);

        btnLancerQuiz.addEventListener('click', demmarerQuiz);
        btnSuivant.addEventListener('click', questionSuivant);
        //Ajout des listeners de grammaire 
        listItemGenreMasculinFemininDesNoms.addEventListener('click', listItemGenreMasculinFemininDesNomsAction);
        listItemComplementCirconstancielDeLieu.addEventListener('click', listItemComplementCirconstancielDeLieuAction);
        listItemAdjectifQualificatif.addEventListener('click', listItemAdjectifQualificatifAction);
        listItemPlurielDesNomsEnAilEtAl.addEventListener('click', listItemPlurielDesNomsEnAilEtAlAction);
        listItemNomCommunNomPropre.addEventListener('click', listItemNomCommunNomPropreAcion);
        listItemAdjectifPossessif.addEventListener('click', listItemAdjectifPossessifAction);
        listItemComplementDobjetDirect.addEventListener('click', listItemComplementDobjetDirectAction);
        listItemComplementDobjetIndirect.addEventListener('click', listItemComplementDobjetIndirectAction);

        // Ajout des listeners de Vocabulaire 
        listItemradicaux.addEventListener('click', listItemradicauxAction);
        listItemPrefixe.addEventListener('click', listItemPrefixeAction);
        listItemSuffixe.addEventListener('click', listItemSuffixeAction);
        listItemChampLexical.addEventListener('click', listItemChampLexicalAcion);
        listItemSynonymie.addEventListener('click', listItemSynonymieAction);
        listItemAntonymie.addEventListener('click', listItemAntonymieAction);
        listItemHomonymie.addEventListener('click', listItemHomonymieAction);
        listItemParonymie.addEventListener('click', listItemParonymieAction);

        // ajout des listeners de grammaire (panel)
        listItemGenreMasculinFemininDesNoms2.addEventListener('click', listItemGenreMasculinFemininDesNomsAction);
        listItemComplementCirconstancielDeLieu2.addEventListener('click', listItemComplementCirconstancielDeLieuAction);
        listItemAdjectifQualificatif2.addEventListener('click', listItemAdjectifQualificatifAction);
        listItemPlurielDesNomsAilEtAl2.addEventListener('click', listItemPlurielDesNomsEnAilEtAlAction);
        listItemNomCommunNomPropre2.addEventListener('click', listItemNomCommunNomPropreAcion);
        listItemAdjectifPossessif2.addEventListener('click', listItemAdjectifPossessifAction);
        listItemComplementDobjetDirect2.addEventListener('click', listItemComplementDobjetDirectAction);
        listItemComplementDobjetInDirect2.addEventListener('click', listItemComplementDobjetIndirectAction);
        
         // ajout des listeners de grammaire (panel2)
        listItemGenreMasculinFemininDesNoms3.addEventListener('click', listItemGenreMasculinFemininDesNomsAction);
        listItemComplementCirconstancielDeLieu3.addEventListener('click', listItemComplementCirconstancielDeLieuAction);
        listItemAdjectifQualificatif3.addEventListener('click', listItemAdjectifQualificatifAction);
        listItemPlurielDesNomsAilEtAl3.addEventListener('click', listItemPlurielDesNomsEnAilEtAlAction);
        listItemNomCommunNomPropre3.addEventListener('click', listItemNomCommunNomPropreAcion);
        listItemAdjectifPossessif3.addEventListener('click', listItemAdjectifPossessifAction);
        listItemComplementDobjetDirect3.addEventListener('click', listItemComplementDobjetDirectAction);
        listItemComplementDobjetInDirect3.addEventListener('click', listItemComplementDobjetIndirectAction);

        // ajout des listeners d'orthographe (panel)
        listItemOuEtOu2.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif2.addEventListener('click', listItemAccordAdjectifAction);
        listItemLeGdur2.addEventListener('click', listItemGdurAction);
        listItemMotEnEuilleEtEnEuil2.addEventListener('click', listItemMotEnEuilleEtEuilAction);
        listItemEmploiDeleursEtleur2.addEventListener('click', listItemEmploiDeLeursEtLeurAction);
        listItemNomsFemininEnEurEtOeur2.addEventListener('click', listItemNomFemininEnEurEtOeurAction);
        listItemHomonymeMaisMetMes2.addEventListener('click', listItemHomonymeMaisMetMesAction);
        listItemEmploiDeCeSeCeux2.addEventListener('click', listItemEmploiDeCeSeCeuxAction);
        
         // ajout des listeners d'orthographe (panel2)
        listItemOuEtOu3.addEventListener('click', listItemOuetOuAction);
        listItemAccordAdjectif3.addEventListener('click', listItemAccordAdjectifAction);
        listItemLeGdur3.addEventListener('click', listItemGdurAction);
        listItemMotEnEuilleEtEnEuil3.addEventListener('click', listItemMotEnEuilleEtEuilAction);
        listItemEmploiDeleursEtleur3.addEventListener('click', listItemEmploiDeLeursEtLeurAction);
        listItemNomsFemininEnEurEtOeur3.addEventListener('click', listItemNomFemininEnEurEtOeurAction);
        listItemHomonymeMaisMetMes3.addEventListener('click', listItemHomonymeMaisMetMesAction);
        listItemEmploiDeCeSeCeux3.addEventListener('click', listItemEmploiDeCeSeCeuxAction);
        // Ajout des listeners vocabulaire (panel)
        listItemradicaux2.addEventListener('click', listItemradicauxAction);
        listItemprefixe2.addEventListener('click', listItemPrefixeAction);
        listItemsuffixe2.addEventListener('click', listItemSuffixeAction);
        listItemchampLexical2.addEventListener('click', listItemChampLexicalAcion);
        listItemsynonymie2.addEventListener('click', listItemSynonymieAction);
        listItemantonymie2.addEventListener('click', listItemAntonymieAction);
        listItemhomonymie2.addEventListener('click', listItemHomonymieAction);
        listItemparonymie2.addEventListener('click', listItemParonymieAction);
        
         // Ajout des listeners vocabulaire (panel2)
        listItemradicaux3.addEventListener('click', listItemradicauxAction);
        listItemprefixe3.addEventListener('click', listItemPrefixeAction);
        listItemsuffixe3.addEventListener('click', listItemSuffixeAction);
        listItemchampLexical3.addEventListener('click', listItemChampLexicalAcion);
        listItemsynonymie3.addEventListener('click', listItemSynonymieAction);
        listItemantonymie3.addEventListener('click', listItemAntonymieAction);
        listItemhomonymie3.addEventListener('click', listItemHomonymieAction);
        listItemparonymie3.addEventListener('click', listItemParonymieAction);
    }
};

app.initialize();

//Déclaration des variables
var divCours;
var divQuiz;
var btnLancerQuiz;
var btnSuivant;
var btnChoix1;
var btnChoix2;
var btnChoix3;
var btnChoix4;

// variables Orthographe 
var listItemOuetOu;
var listItemAccordAdjectif;
var listItemGdur;
var listItemMotEnEuilleEtEuil;
var listItemEmploiDeLeursEtLeur;
var listItemNomFemininEnEurEtOeur;
var listItemHomonymeMaisMetMes;
var listItemEmploiDeCeSeCeux;

// variables Grammaire 
var listItemGenreMasculinFemininDesNoms;
var listItemComplementCirconstancielDeLieu;
var listItemAdjectifQualificatif;
var listItemPlurielDesNomsEnAilEtAl;
var listItemNomCommunNomPropre;
var listItemAdjectifPossessif;
var listItemComplementDobjetDirect;
var listItemComplementDobjetIndirect;
// variables Grammaire (panel)
var listItemGenreMasculinFemininDesNoms2;
var listItemComplementCirconstancielDeLieu2;
var listItemAdjectifQualificatif2;
var listItemPlurielDesNomsAilEtAl2;
var listItemNomCommunNomPropre2;
var listItemAdjectifPossessif2;
var listItemComplementDobjetDirect2;
var listItemComplementDobjetInDirect2;
// variables Grammaire (panel2)
var listItemGenreMasculinFemininDesNoms3;
var listItemComplementCirconstancielDeLieu3;
var listItemAdjectifQualificatif3;
var listItemPlurielDesNomsAilEtAl3;
var listItemNomCommunNomPropre3;
var listItemAdjectifPossessif3;
var listItemComplementDobjetDirect3;
var listItemComplementDobjetInDirect3;
// variables d'orthographe(panel)
var listItemOuEtOu2;
var listItemAccordAdjectif2;
var listItemLeGdur2;
var listItemMotEnEuilleEtEnEuil2;
var listItemEmploiDeleursEtleur2;
var listItemNomsFemininEnEurEtOeur2;
var listItemHomonymeMaisMetMes2;
var listItemEmploiDeCeSeCeux2;

// variables d'orthographe(panel2)
var listItemOuEtOu3;
var listItemAccordAdjectif3;
var listItemLeGdur3;
var listItemMotEnEuilleEtEnEuil3;
var listItemEmploiDeleursEtleur3;
var listItemNomsFemininEnEurEtOeur3;
var listItemHomonymeMaisMetMes3;
var listItemEmploiDeCeSeCeux3;

// variables vocabulaire(panel)
var listItemradicaux2;
var listItemprefixe2;
var listItemsuffixe2;
var listItemchampLexical2;
var listItemsynonymie2;
var listItemantonymie2;
var listItemhomonymie2;
var listItemparonymie2;

// variables vocabulaire(panel2)
var listItemradicaux3;
var listItemprefixe3;
var listItemsuffixe3;
var listItemchampLexical3;
var listItemsynonymie3;
var listItemantonymie3;
var listItemhomonymie3;
var listItemparonymie3;
// variables Vocabulaire
var listItemradicaux;
var listItemPrefixe;
var listItemSuffixe;
var listItemChampLexical;
var listItemSynonymie;
var listItemAntonymie;
var listItemHomonymie;
var listItemParonymie;

// variables quiz 
var quizCorrespondant;

//Fonctions  
// fonction d'orthographe 
function listItemOuetOuAction() {
    changerCours(coursOuetOuAvecAcent);
    quizCorrespondant = quizOuetOu;
    ouvrirPageCours();
}

function listItemAccordAdjectifAction() {
    changerCours(coursAccordDeLadjectifQualif);
    quizCorrespondant = quizAccordDeLadjectifQualificatif ;
    ouvrirPageCours();
}

function listItemGdurAction() {
    changerCours(coursGdur);
    quizCorrespondant = quizGdurGdoux ;
    ouvrirPageCours();
}

function listItemMotEnEuilleEtEuilAction() {
    changerCours(coursMotEnEuilleEtEuil);
    quizCorrespondant = quizMotEnEuil ;
    ouvrirPageCours();
}

function listItemEmploiDeLeursEtLeurAction() {
    changerCours(coursEmploiDeLeursEtLeur);
    quizCorrespondant = quizLeurEtLeurs ;
    ouvrirPageCours();
}

function listItemNomFemininEnEurEtOeurAction() {
    changerCours(coursNomFemininEnEurEtOeur);
    quizCorrespondant = quizEurEureOeur ;
    ouvrirPageCours();
}

function listItemHomonymeMaisMetMesAction() {
    changerCours(coursHomonymesMaisMetMes);
    quizCorrespondant = quizMaisMesMet
    ouvrirPageCours();
}

function listItemEmploiDeCeSeCeuxAction() {
    changerCours(coursEmploiDeCeSeEtCeux);
    quizCorrespondant = quizSeCe ;
    ouvrirPageCours();
}

// fonction Grammaire 
function listItemGenreMasculinFemininDesNomsAction() {
    changerCours(coursGrammaireGenreMasculinFeminin);
    quizCorrespondant = quizGenreNoms ;
    ouvrirPageCours();
}

function listItemComplementCirconstancielDeLieuAction() {
    changerCours(coursGrammaireComplementCirconstancielDeLieu);
    quizCorrespondant = quizCCl ;
    ouvrirPageCours();
}

function listItemAdjectifQualificatifAction() {
    changerCours(coursGrammaireAdjectifQualificatif);
    quizCorrespondant = quizAdjectifQualificatif ;
    ouvrirPageCours();
}

function listItemPlurielDesNomsEnAilEtAlAction() {
    changerCours(coursGrammairePlurielDesNomsEnAilEtEnAl);
    quizCorrespondant = quizPlurielDesNomsEnAilEtEnAl ;
    ouvrirPageCours();
}

function listItemNomCommunNomPropreAcion() {
    changerCours(coursGrammaireNomCommunNomPropre);
    quizCorrespondant = quizNomPropreNomCommun ;
    ouvrirPageCours();
}

function listItemAdjectifPossessifAction() {
    changerCours(coursGrammaireAdjectifPossessif);
    quizCorrespondant = quizAdjectifPossessif ;
    ouvrirPageCours();
}

function listItemComplementDobjetDirectAction() {
    changerCours(coursGrammaireComplementDobjetDirect);
    quizCorrespondant = quizCOD ;
    ouvrirPageCours();
}

function listItemComplementDobjetIndirectAction() {
    changerCours(coursGrammaireComplementDobjetIndirect);
    quizCorrespondant = quizCOI ;
    ouvrirPageCours();
}


// fonction Vocabulaire
function listItemradicauxAction() {
    changerCours(coursVocabulaireRadicaux);
    quizCorrespondant = quizRadical ;
    ouvrirPageCours();
}

function listItemPrefixeAction() {
    changerCours(coursVocabulairePrefixe);
    quizCorrespondant = quizPrefixe ;
    ouvrirPageCours();
}

function listItemSuffixeAction() {
    changerCours(coursVocabulaireSuffixe);
    quizCorrespondant = quizSuffixe ;
    ouvrirPageCours();
}

function listItemSynonymieAction() {
    changerCours(coursVocabulaireSynonymie);
    quizCorrespondant = quizSynonymes ;
    ouvrirPageCours();
}

function listItemChampLexicalAcion() {
    changerCours(coursVocabulaireChampLexical);
    quizCorrespondant = quizchampLexical ;
    ouvrirPageCours();
}

function listItemAntonymieAction() {
    changerCours(coursVocabulaireAntonymie);
    quizCorrespondant = quizAntonyme ;
    ouvrirPageCours();
}

function listItemHomonymieAction() {
    changerCours(coursVocabulaireHomonymie);
    quizCorrespondant = quizHomonyme ;
    ouvrirPageCours();
}

function listItemParonymieAction() {
    changerCours(coursVocabulaireParonymie);
    quizCorrespondant = quizParonyme ;
    ouvrirPageCours();
}

function ouvrirPageCours() {
    $.mobile.changePage('#pageCours', {transition: "slide"});
    $("#myPanel").panel("close");
}

function changerCours(nouveauCours) {
    changerTxt(nouveauCours, divCours);
}

function changerTxt(texte, idChamps) {
    idChamps.innerHTML = texte;
}


