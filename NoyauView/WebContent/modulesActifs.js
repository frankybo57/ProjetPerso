/**
 * 
 */
var modulesActifs = [
	{
		"id" : 1,
		"nom" : "Noyau",
		"etat" : "Actif"
	},
	{
		"id" : 2,
		"nom" : "ModuleStock",
		"etat" : "Actif"
	},
	{
		"id" : 3,
		"nom" : "ModuleRecette",
		"etat" : "Actif"
	},
	{
		"id" : 4,
		"nom" : "ModuleCourse",
		"etat" : "Inactif"
	},
	{
		"id" : 5,
		"nom" : "ModuleMenu",
		"etat" : "Inactif"
	},
	{
		"id" : 6,
		"nom" : "ModuleCalculatrice",
		"etat" : "Actif"
	}
];

var getModuleById = function(Id){
	for(var module of modulesActifs){
		if(module.id == Id) return module;
	}
	return null;
}

var getModuleByNom = function(nom){
	for(var module of modulesActifs){
		if(module.nom == nom) return module;
	}
	return null;
}

var getModulesByEtat = function(etat){
	var modulesSet;
	for(var module of modulesActifs){
		if(module.etat == etat) modulesSet.push(module);
	}
	return modulesSet;
}

var getEtatById = function(Id){
	for(var module of modulesActifs){
		if(module.id == Id) return module.etat;
	}
	return null;
}

var getEtatByNom = function(nom){
	for(var module of modulesActifs){
		if(module.nom == nom) return module.etat;
	}
	return null;
}