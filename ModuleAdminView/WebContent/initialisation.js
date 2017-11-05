/**
 * 
 */

var initMotDePasse = function(){
	container = $("#container");
	container.empty();
	
	var div = $("<div>").addClass("panel panel-default");
	container.append(div);
	
	var div2 = $("<div>").addClass("panel panel-heading");
	div2.html("<h1>Connexion au mode admin</h1>");
	div.append(div2);
	
	div2 = $("<div>").addClass("panel panel-body");
	div.append(div2);
	
	var form = $("<form>").attr("name","mdp");
	div2.append(form);
	
	div = $("<div>").addClass("form-group");
	form.append(div);
	
	// Champ de saisie login
	var label = $("<label>").attr("for","login");
	label.text("Login");
	div.append(label);
	
	var input = $("<input>").addClass("form-control");
	input.attr("type","text");
	input.attr("id","login");
	input.css("width","400px");
	div.append(input);
	
	div = $("<div>").addClass("form-group");
	form.append(div);
	
	// Champ de saisie mot de passe
	label = $("<label>").attr("for","password");
	label.text("Mot de passe");
	div.append(label);
	
	input = $("<input>").addClass("form-control");
	input.attr("type","text");
	input.attr("id","password");
	input.css("width","400px");
	div.append(input);
	
	// Bouton confirmer
	var button = $("<button>").addClass("btn btn-success");
	button.attr("onclick","testLogin()");
	button.attr("type","button");
	button.html("<span class=\"glyphicon glyphicon-ok\"></span>")
	form.append(button);
	
	// Bouton effacer
	button = $("<button>").addClass("btn btn-danger");
	button.attr("onclick","effacer()");
	button.attr("type","button");
	button.html("<span class=\"glyphicon glyphicon-remove\"></span>")
	form.append(button);
	
	// Bouton retour
	button = $("<button>").addClass("btn btn-warning");
	button.attr("onclick","retour()");
	button.attr("type","button");
	button.html("<span class=\"glyphicon glyphicon-arrow-left\"></span>")
	form.append(button);
};

var effacer = function(){
	// Effacement des champs "login" et "password" de l'écran de connexion au mode admin.
	$("#login").value = "";
	$("#password").value = "";
	
	initMotDePasse();
};


















initMotDePasse();