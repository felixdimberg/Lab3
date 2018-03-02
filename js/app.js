$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//________Creates all the views______________

	var firstTextView = new FirstTextView($("#firstText"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dinnerView = new DinnerView($("#dinnerView"), model);
	var dishView = new DishView($("#dishView"), model);
	var dinnerInfoView = new DinnerInfoView($("#dinnerInfo"), model);
	var findDishView = new FindDishView($("#findDish"), model);
	var myDinnerPeopleView = new MyDinnerPeopleView($("#myDinnerPeople"), model);
	var chooseDishView = new ChooseDishView($("#chooseDish"), model, this);

	//________Creates all the controllers________

	var firstTextController = new FirstTextController(firstTextView, model, this);
	var sidebarController = new SidebarController(sidebarView, model, this);
	var dinnerController = new DinnerController(dinnerView, model, this);
	var myDinnerPeopleController = new MyDinnerPeopleController(myDinnerPeopleView, model, this);
	var dishController = new DishController(dishView, model, this);
	var chooseDishController = new ChooseDishController(chooseDishView, model, this);
	var findDishController = new FindDishController(findDishView, model, this);
	//_____________Hide/Show functions______________


	var hideAllViews = function() {
		firstTextView.container.hide();
		findDishView.container.hide();
		dishView.container.hide();
		myDinnerPeopleView.container.hide();
		sidebarView.container.hide();
		dinnerView.container.hide();
		dinnerInfoView.container.hide();
		chooseDishView.container.hide();
	}

	this.showChooseDish = function(){
		var chooseDishController = new ChooseDishController(chooseDishView, model, this);
		hideAllViews();
		chooseDishView.container.show();
		sidebarView.container.show();
		findDishView.container.show();

	}

	this.showDinner = function(){
		hideAllViews();
		myDinnerPeopleView.container.show();
		dinnerView.container.show();
	}

	this.showDinnerInfo = function(){
		hideAllViews();
		myDinnerPeopleView.container.show();
		dinnerInfoView.container.show();
	}

	this.showDishView = function(){
		hideAllViews();
		sidebarView.container.show();
		dishView.container.show();
	}


	hideAllViews();
	firstTextView.container.show();

	
});
