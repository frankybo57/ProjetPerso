var caractere = "";
var caracterePrecedent = "";
var operateur = "";
var chaineEnCours = "";

var entiers = true;

var resultat = "";
var ecran = document.getElementById("ecran");

var taper = function(caractereClick){
	
	caractere = "";
	ecran.value = "";
	caractere = caractereClick;
	analyseCaractere();

}


var analyseCaractere = function(){

	if(!isNaN(caractere))			caractereAlphanumerique();
	else if((caractere === "+")
			||(caractere === "-")
			||(caractere === "*")
			||(caractere === "/")
			||(caractere === "%"))	caractereOperateur();
	else if(caractere === "oppose")	caractereOppose();
	else if(caractere === ".")		caracterePoint();
	else if(caractere === "reset")	caractereReset();
	else if(caractere === "retour") caractereRetour();
	else 							caractereEgal();

}


var caractereAlphanumerique = function(){
	
	if(!isNaN(caracterePrecedent)){
		if(operateur==="="){
			ecran.value = "Erreur";
			caractere = "";
			caracterePrecedent = "";
			operateur = "";
			chaineEnCours = "";
			resultat = "";
			return true;
		}
		caracterePrecedent = caractere;
		chaineEnCours = chaineEnCours + caractere;
	}
	else if(isOperateur(caracterePrecedent)){
		if(chaineEnCours==="")	chaineEnCours = caractere;
		else chaineEnCours = chaineEnCours + caractere;
		caracterePrecedent = caractere;
	}
	else if(caracterePrecedent === ""){
		if(chaineEnCours==="")	chaineEnCours = caractere;
		else chaineEnCours = chaineEnCours + caractere;
		caracterePrecedent = caractere;
	}
	ecran.value = chaineEnCours;
}

var caractereOppose = function(){
	
	if(!isNaN(caracterePrecedent)){
		chaineEnCours = -chaineEnCours;
		ecran.value = chaineEnCours;
	}
	else if(isOperateur(caracterePrecedent)){
		// Pas d'opération à réaliser.
	}
	else if(caracterePrecedent === ""){
		// Pas d'opération à réaliser.
	}
	
}


var caracterePoint = function(){











}


var caractereRetour = function(){

	if(caracterePrecedent === "") caractereReset();
	else if(!isNaN(caracterePrecedent)){
		var longueur = chaineEnCours.length;
		if(longueur>1){
			chaineEnCours = chaineEnCours.substring(0, chaineEnCours.length-1);
			caracterePrecedent = chaineEnCours[chaineEnCours.length-1];
		}
		else if(longueur === 1){
			if(operateur !== ""){
				caracterePrecedent = operateur;
				operateur = "";
				chaineEnCours = resultat;
				resultat = "";
			}
			else caractereReset();
		}
		else if(longueur === 0){
			caractereReset();
		}
	}
	else{
		operateur = "";
		chaineEnCours = resultat;
		caractere = "";
		caracterePrecedent = chaineEnCours[chaineEnCours.length-1];
		resultat = "";
	}
	
	ecran.value = chaineEnCours;
}


var caractereReset = function(){

	ecran.value = "";
	resultat = "";
	operateur = "";
	chaineEnCours = "";
	caractere = "";
	caracterePrecedent = "";

}


var caractereEgal = function(){

	if(!isNaN(caracterePrecedent)){
		if(operateur === "+")		resultat = (parsePerso(resultat)+parsePerso(chaineEnCours));
		else if(operateur === "-")	resultat = (parsePerso(resultat)-parsePerso(chaineEnCours));
		else if(operateur === "*")	resultat = (parsePerso(resultat)*parsePerso(chaineEnCours));
		else if(operateur === "/"){
			if(parsePerso(chaineEnCours)!=0)resultat = parsePerso((parsePerso(resultat)/parsePerso(chaineEnCours)));
			else{
				ecran.value = "Erreur : div by 0.";
				caractere = "";
				caracterePrecedent = "";
				operateur = "";
				chaineEnCours = "";
				resultat = "";
				return true;
			}
		}
		else if(operateur === "%"){
			if(parsePerso(chaineEnCours)!=0)resultat = parsePerso((parsePerso(resultat)%parsePerso(chaineEnCours)));
			else{
				ecran.value = "Erreur : div by 0.";
				caractere = "";
				caracterePrecedent = "";
				operateur = "";
				chaineEnCours = "";
				resultat = "";
				return true;
			}
		}

		ecran.value = resultat;
		operateur = "=";
		chaineEnCours = resultat;
		caractere = "";
		caracterePrecedent = chaineEnCours[chaineEnCours.length-1];
	}
	else if(caracterePrecedent === "") ecran.value = "0";
	else{
		ecran.value = "Erreur";
		caractere = "";
		caracterePrecedent = "";
		operateur = "";
		chaineEnCours = "";
		resultat = "";
	}
}


var caractereOperateur = function(){

	if(!isNaN(caracterePrecedent)){
		if(operateur === "")		resultat = chaineEnCours;
		else if(operateur === "+")	resultat = (parsePerso(resultat)+parsePerso(chaineEnCours));
		else if(operateur === "-")	resultat = (parsePerso(resultat)-parsePerso(chaineEnCours));
		else if(operateur === "*")	resultat = (parsePerso(resultat)*parsePerso(chaineEnCours));
		else if(operateur === "/"){
			if(parsePerso(chaineEnCours)!=0) resultat = (parsePerso(resultat)/parsePerso(chaineEnCours));
			else{
				ecran.value = "Erreur : div by 0.";
				caractere = "";
				caracterePrecedent = "";
				operateur = "";
				chaineEnCours = "";
				resultat = "";
				return true;
			}
		}	
		else if(operateur === "%"){
			if(parsePerso(chaineEnCours)!=0) resultat = (parsePerso(resultat)%parsePerso(chaineEnCours));
			else{
				ecran.value = "Erreur : div by 0.";
				caractere = "";
				caracterePrecedent = "";
				operateur = "";
				chaineEnCours = "";
				resultat = "";
				return true;
			}
		}

		ecran.value = resultat;
		operateur = caractere;
		caracterePrecedent = caractere;
		caractere = "";
		chaineEnCours = "";

	}

	else if((caracterePrecedent === "")
			||(caracterePrecedent === "+")
			||(caracterePrecedent === "-")
			||(caracterePrecedent === "*")
			||(caracterePrecedent === "/")
			||(caracterePrecedent === "%")){
			
		ecran.value = "Erreur";
		caractere = "";
		caracterePrecedent = "";
		operateur = "";
		chaineEnCours = "";
		resultat = "";	

	}
}


var parsePerso = function(arg){
	if(entiers){
		return parseInt(arg);
	}
	else{
		return parseFloat(arg);
	}
}

var isOperateur = function(arg){
	return ((arg === "+")
			||(arg === "-")
			||(arg === "*")
			||(arg === "/")
			||(arg === "%"));
}