var qname = "Please enter your full name";
var name =	prompt(qname);

var qusrname = "Please enter your username: " ;
var usrname = prompt(qusrname);

var qgender = "What is your gender? {M if Male, F if Female} ";
var gndr = prompt(qgender);

var qdesc = "Please type a brief description of yourself: ";
var descr = prompt(qdesc);

var qbyr = "Please type your birth year: ";
var byr = prompt(qbyr);
var agen = (2023-byr);

var qpfp = "Do you want a custom profile picture? ";
var cpfp =  confirm(qpfp);
var pfp = "Please enter filename (eg: 1234.png):";

if (cpfp == true ){
	var pfpfile = prompt(pfp)
}

document.getElementById("ppic").src = (pfpfile);
document.getElementById("fname").innerHTML = (name);
document.getElementById("username").innerHTML = (usrname);
document.getElementById("gender").innerHTML = (gndr);
document.getElementById("desc").innerHTML = (descr);
document.getElementById("year").innerHTML = (byr);
document.getElementById("age").innerHTML = (agen);
