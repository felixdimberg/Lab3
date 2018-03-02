var DinnerInfoView = function(container, model){
	model.addObserver(this);
	this.container = container;
	var dishInfo = container.find("#dishInfo");

	this.update = function(){
		var menu = model.getFullMenu();
		var dishes = "";

		for (var i = 0; i < menu.length; i++){ 
			dishes +='<div class="col-md-12" id="preparations"><div class="col-md-4"><img src="' + menu[i].image + '"></div>' + 
					'<div class=col-md-4><h4>' + menu[i].title + '</h4><text>' + menu[i].instructions + '</text></div>' +
					'<div class="col-md-4" offset="col-md-1"><h4>Preparations</h4><text>' + menu[i].instructions  + '</text></div></div>';
		}

		dishInfo.html(dishes);
	}

}	
