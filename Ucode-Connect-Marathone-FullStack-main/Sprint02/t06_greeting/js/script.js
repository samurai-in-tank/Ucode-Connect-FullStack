function name_input(){
	let name_1 = String(prompt("What is your first name?"));
	let name_2 = String(prompt("What is your last name?"));
	let name_check_1 = name_1.match(/^[a-z]+$/i)
	let name_check_2 = name_2.match(/^[a-z]+$/i)

	if (name_check_1 && name_check_2) {
	    name_1 = name_1.charAt(0).toUpperCase() + name_1.slice(1).toLowerCase();
	    name_2 = name_2.charAt(0).toUpperCase() + name_2.slice(1).toLowerCase();

	    console.log(`Hey, ${name_1} ${name_2}`);
	    alert(`Hey, ${name_1} ${name_2}`);
	}
	else {
	    console.log("Wrong input!");
	    alert("Wrong input!");
	}
}

name_input();
