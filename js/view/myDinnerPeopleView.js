var MyDinnerPeopleView = function(container, model){
	model.addObserver(this);
	this.container = container;
	this.button = container.find("#backBtn");
	var guestCount = container.find("#guestCount");

	this.update = function(){
		var guests = model.getNumberOfGuests();
		guestCount.html(guests);
	}

}