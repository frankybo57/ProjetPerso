/**
 * 
 */
var onglet = "ongletAcceuil";

var showStockAcceuil = function(){
	$("#navAcceuil").addClass("active");
	$("#navAlimentaire").removeClass("active");
	$("#navVestimentaire").removeClass("active");
	$("#navMenager").removeClass("active");
	
	onglet = "ongletAcceuil";
		
	initVue();
};

var showStockAlimentaire = function(){
	$("#navAcceuil").removeClass("active");
	$("#navAlimentaire").addClass("active");
	$("#navVestimentaire").removeClass("active");
	$("#navMenager").removeClass("active");
	
	onglet = "ongletStock Alimentaire";
	
	initVue();
};

var showStockVestimentaire = function(){
	$("#navAcceuil").removeClass("active");
	$("#navAlimentaire").removeClass("active");
	$("#navVestimentaire").addClass("active");
	$("#navMenager").removeClass("active");
	
	onglet = "ongletStock Vestimentaire";
	
	initVue();
};

var showStockMenager = function(){
	$("#navAcceuil").removeClass("active");
	$("#navAlimentaire").removeClass("active");
	$("#navVestimentaire").removeClass("active");
	$("#navMenager").addClass("active");
	
	onglet = "ongletStock Ménager";
	
	initVue();
};