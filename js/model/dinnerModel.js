
//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var observers = [];
	var numberOfGuests = 1;
	var menu = [];
	var id = 1;
	var type = "all";
	var filter = "";

	this.search = function(){
		notifyObserver();
	}

	this.setFilter = function(newFilter){
		filter = newFilter;
	}

	this.getFilter = function(){
		return filter;
	}

	this.setType = function(newType){
		type = newType;
		notifyObserver();
	}

	this.getType = function(){
		return type;
	}

	this.setId= function(newId){
		id = newId;
		notifyObserver();
	}
	this.getId = function(){
		return id;
	}

	this.addObserver = function(observer) {
		observers.push(observer);
	}

	var notifyObserver = function(obj) {
		for (var i = 0; i < observers.length; i++){
			observers[i].update(obj);
		}
	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		notifyObserver();
	}
	
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		for(var i = 0; i < menu.length; i++) {
			if(menu[i].type === type) {
				return menu[i];
			} else {
				return false;
			} 
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
    this.getDish = function (id, getDishIngredient) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/information',
            dataType:'JSON',
            type:'GET',
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            },
            success: function (data) {
                getDishIngredient(data);
            },
            error: function (data) {
                alert("You Have No Internet Connection!");
                console.log(data);
            }
        })
    }

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var price = 0;

        for (var i = 0; i < menu.length; i++) {
            menu[i].extendedIngredients.forEach(function(ingredient){
				price += ingredient.amount;
			})
        }
        return price * numberOfGuests;
    }

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		this.getDish(id, function(dish){
	    	for (var i = 0; i < menu.length; i++) {
            	if (menu[i].id === dish.id)
                	menu.splice	(i, 1);
			}
		menu.push(dish);
        notifyObserver();
		});
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
        for (var i = 0; i < menu.length; i++) {
            if (menu[i].id == id)
                menu.splice(i, 1);
        }
        notifyObserver();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
    this.getAllDishes = function (type, filter, callback) {
        $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',
            dataType: 'JSON',
            cache: false,
            type: 'GET',
            headers: {
                'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
            },
            data: {
                query: filter,
                type: type,
                number: 100,
            },
            success: function (data) {
                callback(data);
            },
            error: function (data) {
                alert("You Have No Internet Connection!");
                console.log(data);
            }
        })
    }

}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.



