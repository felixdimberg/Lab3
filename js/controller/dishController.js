var DishController = function(view,model,app){
	view.addButton.click(function(){
		model.addDishToMenu(model.getId());
	})

	view.backButton.click(function(){
		app.showChooseDish();
	})
	
}