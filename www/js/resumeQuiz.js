var progression = Math.floor(30*Math.random()) ;
var point = 0 ;
var pp = 1 ; //Arrete les questions quand le nbr quest.length est atteint
var sec = 600 ;
var i ;
function questions(){
	//table des questions
quest = new Array("Quand un corps ne diffuse aucune radiation visible, il est de quelle couleur?",
				"Quel est l\'ensemble de définition de x(t)=1/(t²-1)",
			   "la notation x<5 est-il vrai d\'après l\'axiome x = 3 ",
			   "D\'après l\'équation de Drake : N = R* . fp . ne . fl . fi . fc . L, N signifie le nombre de:",
			   "Quel objet celeste naissant d\'une étoile morte a un nom commençant par '\P\' :",
			   "Qui a énoncé les premières idées sur la relativité d\'Einstein?",
			   "Généraliser l\'expression mika(n) d\'après les axiomes mika(-3)=4 et mika(-9)=10",
               "En quelle base l\'expression 2 + 2 = 10 est-il vraie?",
			   "f(x) = ln(x/3) - 3 pour x assez grand  f(x) = ?",
			   "Quel es l\'anagramme parfait de HOMMERSPI?", //10,
			   "Soit la séquence logique suivante AQE1+AA1A = BRF2 donc AA1Z+A11E = ",
			   "Lequel de ces mots signifient le plus l\'opinion fondée sur des probabilités? ",
			   "La fonction v(x) = ln|x-5| est définie sur :",
			   "La célèbre courbe de Gauss en forme de cloche s\'appelle",
			   "Soit la séquence logique suivante STUVW+W = VUTS + S = TUV donc XKFCHF + H =", //15
			   "Quelle personne a découvert que la lumière est décomposable en d'autres couleurs?",
			   "Quelle est la valeur de g(t)=1/t² pour t très petit?",
			   "Un volcan éclate sur une île et la lave double de volume chaque jour, quelle est la surface recouverte par la lave le 29<sup>ème</sup> jour s\'il la recouvre le 30<sup>ème</sup>",
			   "Axel a 4 ans de plus que moi, il vient d'avoir 2 ans de plus hier à l'âge de 17ans, quel âge j'ai?",
			   "Tous les femmes aiment cuisiner, les grands cuisiniers sont tous des hommes. Que signifie cette phrase?",//20
			   "[Fleur-mirroir,lune-liquide] signifie",
			   "Quel est le vrai entre ces phrases?",
			   "Quelle est la vitesse de la lumière?",
			   " Les droites (D):y=5  et (D'\):x = -3 se joignent en",
			   "La masse d'un solide est exprimée en",//25
			   "La fonction f(x,y)=x²/(y-ln|x|)<sup>-1</sup> avec x = 2y+1 est définie sur",
			   "Le volume de la boule contenue dans une sphère équivaut à V= k.pi.r<sup>3</sup>",
			   "Le 1/8 d'un rectangle divisé en des triangles égaux sont des triangles",
			   "La raison de la formule du volume pour les solides simples V(b,h) = bh signifie que",
			   "Soit la séquence logique suivante MK(A-BB-C) + IA(X-XY-1) = MIKA(A1-BXBY-C1) donc JJ(M-M3-E)+UU(S-2H-2)="
			   );
	//Table des suggestions
sugg = new Array("A.Bleu    &nbsp&nbsp&nbsp       B.Noir      &nbsp&nbsp&nbsp         C.Blanc     &nbsp&nbsp&nbsp        D.rouge vif", //0
                 "A.]-oo,-1[U]-1,1[U]1,+oo[      &nbsp&nbsp&nbsp       B.]-1,0[U]1,+oo[     &nbsp&nbsp&nbsp          C.]-oo,-1[U]1,+oo[",
                 "A.Oui      &nbsp&nbsp&nbsp         B.Non       &nbsp&nbsp&nbsp         C.Indécidable",
				 "A.temps d'expansion de l\'univers     &nbsp&nbsp&nbsp           B.Civilisation extraterresstre       &nbsp&nbsp&nbsp          C. trou noir",
				 "A.Etoile polaire        &nbsp&nbsp&nbsp             B.Pulsor    &nbsp&nbsp&nbsp           C.Pulssatorielle   &nbsp&nbsp&nbsp           D.Pulsar", //5
				 "A.DeMoivre       &nbsp&nbsp&nbsp           B.Lagrange      &nbsp&nbsp&nbsp         C.Henri Poincaré        &nbsp&nbsp&nbsp            D.Albert Einstein",
				 "A. mika(n) = n²/2 + 1     &nbsp&nbsp&nbsp             B. mika(n)= |-|n|+1|      &nbsp&nbsp&nbsp                C.mika(n)=|n|+1 ",
				 "A. base 64     &nbsp&nbsp&nbsp              B.Base 60   &nbsp&nbsp&nbsp           C.Base 2      &nbsp&nbsp&nbsp           D.Base 4",
				 "A. 1/2          &nbsp&nbsp&nbsp          B. 0        &nbsp&nbsp&nbsp          C. -1/2",
				 "A.SHOMMERPI    &nbsp&nbsp&nbsp        B.MORPHISME     &nbsp&nbsp&nbsp         C.MERPHISMO",//10
				 "A.BB2E   &nbsp&nbsp&nbsp     B.B2AE   &nbsp&nbsp&nbsp       C.B21E",
				 "A.Fréquence   &nbsp&nbsp&nbsp       B.Conjécture    &nbsp&nbsp&nbsp     C.Probable",
				 "A.|R - {5}   &nbsp&nbsp&nbsp     B.]5;-5[   &nbsp&nbsp&nbsp        C.]-5,5[U]5,+oo[  &nbsp&nbsp&nbsp    D.|R - {-5}",
				 "A.La loi normale   &nbsp&nbsp&nbsp       B.La loi naturelle  &nbsp&nbsp&nbsp         C.la loi surnaturelle",
				 "A.HCFKXF    &nbsp&nbsp&nbsp        B.FHCFKX    &nbsp&nbsp&nbsp           C.HFCFKX",//15
				 "A.Kepler   &nbsp&nbsp&nbsp       B.Newton   &nbsp&nbsp&nbsp        C.Descartes    &nbsp&nbsp&nbsp      D.Boole",
				 "A. Infiniment petit      &nbsp&nbsp&nbsp     B. 0     &nbsp&nbsp&nbsp         C.Infiniment grand   &nbsp&nbsp&nbsp      D. 1/2",
				 "A. 1/2   &nbsp&nbsp&nbsp        B.1/3   &nbsp&nbsp&nbsp          C.8/9   &nbsp&nbsp&nbsp       D.3/4",
				 "A. 11ans  &nbsp&nbsp&nbsp       B.10ans et 6 mois  &nbsp&nbsp&nbsp       C.10 ans et 3 mois",
				 "A.Malgrès cela les hommes sont meilleurs    &nbsp&nbsp&nbsp       B.Les hommes savent aussi cuisiner  &nbsp&nbsp&nbsp    C. Tout le monde sait cuisiner", //20
				 "A.Les apparences sont des mirroirs  &nbsp&nbsp&nbsp  B.Les apparences sont parfois trompeuses   &nbsp&nbsp&nbsp     C.Mirroir de fleur, lune d\'eau",
				 "A.Il faut manger pour vivre   &nbsp&nbsp&nbsp        B.Il faut vivre pour manger    &nbsp&nbsp&nbsp          C.Il faut manger être normal",
				 "A.300000m/s     &nbsp&nbsp&nbsp          B.3000000km/s       &nbsp&nbsp&nbsp        C.300000km.s<sup>-1</sup>",
				 "A. M(-3/2,5/2)    &nbsp&nbsp&nbsp        B. M(-6/2,30/6)   &nbsp&nbsp&nbsp        C.  M(5,-3)",
				 "A. Kg     &nbsp&nbsp&nbsp        B. kg        &nbsp&nbsp&nbsp       C. Newton(N)", //25
				 "A. x £ |R-{1} et y £ |R-{-1/2}      &nbsp&nbsp&nbsp       B. x £ |R-{-1/2} et y £ |R-{1}",
				 "A.k=4/3   &nbsp&nbsp&nbsp    B. k=2/3  &nbsp&nbsp&nbsp   C. k=7/3  &nbsp&nbsp&nbsp    D.12/5 ",
				 "A.Isocèles  &nbsp&nbsp&nbsp       B.Réctangles   &nbsp&nbsp&nbsp     C.Equilatérales",
				 "A. c'est la superposition d'aires h.pi fois      &nbsp&nbsp&nbsp         B.C'est la superposition de base h fois",
				 "A. J2JU(MU-M23H-E2) &nbsp&nbsp&nbsp          B.UJUJ(M2-M3H2-2E)   &nbsp&nbsp&nbsp      C.JU(JU-M2M23H-E2) &nbsp&nbsp&nbsp   D.JUJU(M2-M23H-E2)" //30
				) ;
	//Table des réponses
rep = new Array("b",
				"a",
				"a",
				"b",
				"d", //5
				"c",
				"c",
				"d",
				"b", 
				"b", //10
				"a",
				"b",
				"a",
				"a",
				"a", //15
				"b",
				"c",
				"a",
				"a",
				"a", //20
				"b",
				"a",
				"c",
				"b",
				"a", //25
				"a",
				"a",
				"b",
				"b",
				"d" //30
				) ;
var i = progression%quest.length ;
document.getElementById("seriequestion").innerHTML = quest[i] ;
document.getElementById("indice").innerHTML = sugg[i] ;
}
function convert(){
return pp+"/"+quest.length ;
}
function tester(x){
  rpx = x ;//Réponse en fonction du bouton touché
  progression++ ;
  if(pp > (quest.length)){
  if(point<=50){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Votre score est de "+point+" points<br> Tu es vraiment nul, un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong>" ); }  
    if(point>=300){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Votre score est de "+point+" points<br> pas mal , un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong>" ); }  
     if(point>=400){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Votre score est de "+point+" points<br> Humm, tu assures ;) un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong>" ); }  
  }
  else{
 if(rpx===rep[i]){point+=25 ; pp++ ; document.getElementById("pts").innerHTML = point ; progression%=quest.length ; }
 if(rpx!==rep[i]){point-=30 ; pp++ ; document.getElementById("pts").innerHTML = point ; progression%=quest.length ; }
 questions();
	}
 }
function compte_rebours(){
sec-- ; document.getElementById("sec").innerHTML = Math.floor(sec/60)+"min"+(sec%60)+"s" ;
if(sec === 0){
  if(point<500){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Temps écoulé, votre score est de "+point+" points<br> Tu es vraiment nul, un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong></br>" ); }  
    if(point>500){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Temps écoulé, votre score est de "+point+" points<br> pas mal , un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong>" ); }  
     if(point>1000){document.write("<center><strong style=\"background-color:yellow;color:blue;font-size:30\">Temps écoulé, votre score est de "+point+" points<br> Humm, tu assures ;) un autre essai?<a href=\"qcmbymika.html\">Cliquer ici</a></center></strong>" ); }}
else{setTimeout("compte_rebours()",1000);}
}


