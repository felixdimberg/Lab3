var ChooseDishController = function(view,model,app){
	view.dish.click(function(dish){
		var dishId = $(dish.target).parents('div').attr('id');
		model.setId(dishId);
		app.showDishView();
	})
}
