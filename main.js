

var mobile_elem = document.getElementById("tab-mobile");

var email_elem = document.getElementById("tab-email"); 

var label_text = document.getElementById("label-text"); 

var registration_input  = document.getElementById("registration-input"); 

var terms  = document.getElementById("terms"); 

var promo  = document.getElementById("promo"); 

var currency  = document.getElementById("currency");

var error  = document.getElementById("error-message");

var error_terms  = document.getElementById("error-message-terms");

var registration_form  = document.getElementById("registration-form");

var title  = document.getElementById("title");

var registration_method = "mobile";


document.getElementById("tab-mobile").addEventListener("click", mobile);

document.getElementById("tab-email").addEventListener("click", email);

document.getElementById("submit").addEventListener("click", submit);


function mobile() {
	mobile_elem.classList.add("tab-active");
	email_elem.classList.remove("tab-active");
	label_text.innerHTML = "Your mobile number (10 digits) :";
	registration_input.type = 'tel';
	registration_input.value = '';
	error.innerHTML = "";
	registration_method = "mobile";
}



function email() {
	email_elem.classList.add("tab-active");
	mobile_elem.classList.remove("tab-active");
	label_text.innerHTML = "Your email:";
	registration_input.type = 'email';
	registration_input.value = '';
	error.innerHTML = "";
	registration_method = "email";
}


function submit() {

	error.style.display = "none";
	error_terms.style.display = "none";
	var phone_mail = registration_input.value ;
	var phoneno = /^\d{10}$/;
	var correct_phone = phone_mail.match(phoneno);
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var correct_email = re.test(String(phone_mail).toLowerCase());

	if (phone_mail === "") {

		error.style.display = "block";

		if (registration_method == "mobile") {
			error.innerHTML = "Please, enter your phone.";
		} else if (registration_method == "email") {
			error.innerHTML = "Please, enter your email.";
		} 

	}  else if (registration_method == "mobile"  &&  correct_phone == null)  {
		error.innerHTML = "Incorect number format.";
		error.style.display = "block";
	}  else if (registration_method == "email"  &&  correct_email == false)  {
		error.innerHTML = "Incorect email format.";
		error.style.display = "block";
	}  else if (terms.checked === false) {
		error.innerHTML = "Please, accept our terms and conditions.";
		error_terms.style.display = "block";
	}  else  {
		var loader = document.createElement("div");
		var layer = document.createElement("div");
		loader.setAttribute("id", "loader");
		layer.setAttribute("id", "layer");
		document.body.appendChild(loader);
		document.body.appendChild(layer);
		setTimeout(success_message, 2000);
	}
}


function success_message()  {
	layer.remove();
	loader.remove();
	registration_form.remove();
	title.innerHTML = "Your account is created. You can log in.";
	var login_form = document.createElement("form");
	document.body.appendChild(login_form);
	login_form.classList.add("form-login");
	var login_label = document.createElement("label");
	login_form.appendChild(login_label);
	login_label.innerHTML = "Your phone / email:";
	var login_input = document.createElement("input");
	login_form.appendChild(login_input);
	login_input.type = 'tel';
	var login_submit = document.createElement("input");
	login_submit.type = "submit";
	login_submit.classList.add("login-button");
	login_submit.value = "Log in";
	login_form.appendChild(login_submit);
}