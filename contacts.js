/* 
Activity: Contact manager
Author: Hamza Lusigi
GitHub: https://github.com/vonmicky
*/

 var contact = {
    
 	init: function (lastName, firstName, phone) {
 		this.lastName = lastName;
		this.firstName = firstName;
		this.phone = phone;
 	},

    describe: function () {
        var description  = "Last name: " + this.lastName + ", first name: " + this.firstName + ", phone: " +this.phone;
        return description;
    }
};



function menu(index) {
	console.log("1: List contacts");
	console.log("2: Add a contact");
	console.log("0: Quit");
	var choice = Number(prompt("Enter a choice:"));
	switch (choice){
		case 0: 
			//Quit
			console.log("Well, Goodbye!");
			break;
		case 1: 
			//list contacts
			console.log("Here's the list of all your contacts:");
			for (var i = 0; i <= add.length - 1; i++) {
				console.log(add[i].describe());
			}
			menu(index);
			break;
		case 2: 
			//Add a contact
			add[index] = Object.create(contact);
			
			
			var lastName = String(prompt("Enter last name:"));
			var firstName = String(prompt("Enter first name:"));
			var phone = Number(prompt("Enter phone:"));
			add[index].init(lastName, firstName, phone);
			console.log("Contact added");
			index++;
			menu(index);
			break;
		default:
		   console.log("Wrong Input, Please enter a valid menu number");
		   menu(index);
	}
}


//... Calling
var add = [];
add[0] = Object.create(contact);
add[0].init("Smith", "John", "255712345678");

console.log("Welcome to your contacts manager!");
menu(1);


