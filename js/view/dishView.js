var DishView = function(container, model,){
	model.addObserver(this);
	this.container = container;
	this.addButton = container.find("#addtoMenubtn");
	this.backButton = container.find("#backBtn");

	var dishInfo = container.find("#dishInfo");
	var dishIngredients = container.find("#dishIngredients");
	var guestCount = container.find("#guestCount");
	var recipePrice = container.find("#totalPrice");

	this.update = function(){
		var guests = model.getNumberOfGuests();
		model.getDish(model.getId(), function(dish){

			var html = '<h1>' + dish.title + '</h1>' +
			'<img src=' + dish.image + '>' +
			'<text>' + dish.instructions + '</text>';

			var totalPrice = 0;
			var recipe = '<ul>';

			dish.extendedIngredients.forEach(function(ingredient){
				recipe += '<li><div class=col-md-4 id="left">' + ingredient.amount*guests + ingredient.unit + '</div>'+
				'<div class=col-md-4 id="center">'+ ingredient.name + '</div>' +
				'<div class=col-md-4 id="right">SEK ' + ingredient.amount*guests + '</div></li>';
				totalPrice += Math.round(ingredient.amount)*guests;
			})

			recipe += '</ul>';
			recipePrice.html('<div class="col-md-4" id="right">' + totalPrice + '</div>');
			dishIngredients.html(recipe);
			dishInfo.html(html);
			guestCount.html(guests);
		});
	}
}