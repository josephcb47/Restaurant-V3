// This is OPTION # 1 of Form Validation //

function validate() {
  var name = document.forms["contactForm"]["fullName"];
  var email = document.forms["contactForm"]["emailAddress"];

  var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name.value == "") {
    alert("Don't forget your name!");
    name.focus();
    return false;
  }

  if (email.value == "") {
    alert("Did you forget to put down your email address?");
    email.focus();
    return false;
  } else if (!emailCheck.test(email.value)) {
    alert("Dude. That was an invalid email address. Try again!");
    email.focus();
    return false;
  } else {
    return true;
  }
}

// This is OPTION # 2 of Form Validation //

// function validate() {
//   var name = document.forms["contactForm"]["fullName"].value;
//   var email = document.forms["contactForm"]["emailAddress"].value;
//   var emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//   if (name == "" || email == "") {
//     alert("Hey. Look at the BOLD fields. Those are required fields for us to contact you. Please fill them out.");
//     return false;
//   } else if (!email.match(emailCheck)) {
//     alert("The email address was invalid. Please fill it out properly.");
//     email.focus();
//     return false;
//   } else {
//     return true;
//   }
// }

// Once either Option #1 or Option #2 Validation functions run through, a success alert will be displayed. //

function success() {
  var name = document.forms["contactForm"]["fullName"].value;
  var email = document.forms["contactForm"]["emailAddress"].value;

  if (validate()) {
    alert("Thank you, " + name + ". " + "You have provided your name and email address which is " + email + ". Both are validated. Hopefully you also submitted the rest of the form so that we can better serve you well.");
    return true;
  }
}
