var DinnerView = function(container, model) {
	model.addObserver(this);

	this.container = container;
	this.button = container.find("#printRecipe");
	var dinnerMenu = container.find("#dinnerMenu");
	var dinnerPrice = container.find("#dinnerPrice");


	this.update = function(){
		var menu = model.getFullMenu();
		var menuPrice = model.getTotalMenuPrice();
		var price = '<div class="col-md-2">' +
			'<div class="vl"><h5>Total:</h5><h4>'+menuPrice+' SEK </h4></div>';
		var dinner = "";

		for (i = 0; i < menu.length; i++) {
			var dishPrice = 0;
			menu[i].extendedIngredients.forEach(function(ingredient){
				dishPrice += Math.round(ingredient.amount);
			})
			dinner += '<div class="col-md-2 pic">' + 
				'<img src=' + menu[i].image + '>' +
				'<text>' + menu[i].title + '</text>' +
				'<h4> '+ dishPrice + ' SEK</h4></div>';
		}
		
		dinnerPrice.html(price);
		dinnerMenu.html(dinner);
	}

}