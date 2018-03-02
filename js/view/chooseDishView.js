var ChooseDishView = function(container, model) {
	model.addObserver(this);
	this.container = container;
	this.dish = container.find('#dishes');
	
	this.update = function(){
		var dishPlace = container.find("#dishes");
		model.getAllDishes(model.getType(), model.getFilter(), function(data){

			var dishBox = "";
			data.results.forEach(function(dish){
				dishBox += '<div class="col-md-2 grid-item" id='+ dish.id+'>'+
				'<img src="https://webknox.com/recipeImages/'+dish.image+'">'+
				'<text>'+dish.title+'</text>'+
				'</div>';
			});
			dishPlace.html(dishBox);
		});
		this.dish = container.find('#dishes');
	};

	var dishPlace = container.find("#dishes");
	model.getAllDishes(model.getType(), model.getFilter(), function(data){

		var dishBox = "";
		data.results.forEach(function(dish){
			dishBox += '<div class="col-md-2 grid-item" id='+ dish.id+'>'+
			'<img src="https://webknox.com/recipeImages/'+dish.image+'">'+
			'<text>'+dish.title+'</text>'+
			'</div>';
		});
		dishPlace.html(dishBox);
	});
	console.log(this.dish);
}
