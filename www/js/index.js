
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
        btnChangerTxt = document.getElementById('changerTxt');
        champsTxt = document.getElementById('champsTxt');
        
        //Ajout des listeners
        btnChangerTxt.addEventListener('click', btnChangerTxtAction);
    }
   
};

app.initialize();

//Déclaration des variables
var btnChangerTxt;
var champsTxt;

//Fonctions  

function btnChangerTxtAction() {
    var txt = "J'ai <u>changé</u> le text";
    changerTxt(txt, champsTxt);
}

function changerTxt(texte, idChamps) {
    idChamps.innerHTML = texte;
}