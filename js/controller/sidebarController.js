var SidebarController = function(view, model, app) {
	view.button.click(function(){
		app.showDinner();
	})

	view.guestCount.change(function(){
		model.setNumberOfGuests(view.guestCount.val());
	})
}
