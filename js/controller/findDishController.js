var FindDishController = function(view,model,app){

	view.input.change(function(){
		var filter = this.value;
		model.setFilter(filter);
	})

	view.button.click(function(){
		model.search();
		app.showChooseDish();
	})

	view.typeSelect.change(function(){
		var type = this.value;
		model.setType(type);
		app.showChooseDish();
;	})
}