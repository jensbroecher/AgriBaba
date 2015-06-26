function showindicator() {
document.getElementById("loadingindicator").className = "animated fadeIn";
document.getElementById("loadingindicator").style.display = "block";
}

function hideindicator() {
document.getElementById("loadingindicator").className = "animated fadeOut";
setTimeout(function(){
	document.getElementById("loadingindicator").style.display = "none";
}, 1000);
}

function letsgo() {
	showindicator();
	setTimeout(function(){
	document.location.href = 'check.html';
	}, 2000);
}

document.addEventListener("deviceready", onDeviceReady, false);

$( document ).ready(function() {

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
	
	localStorage.setItem('latitude', latitude);
	localStorage.setItem('longitude', longitude);
	
  };

  function error() {
    
  };

navigator.geolocation.getCurrentPosition(success, error);
	
lang = localStorage.getItem('lang');
if(lang == 'eng') {
	$(".eng").removeClass("eng");
}
if(lang == 'swa') {
	$(".swa").removeClass("swa");
}
});

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

function askhowmuch() {

var valuefrompromt = prompt("Contribute to the team (Minimum KES 100) and become registered in the official Gor Mahia F.C. Fanclub! Contribution is valid for 6 Months after which it needs to be renewed.", "100");
while(valuefrompromt.length < 3){
alert("Please enter at least 3 digits");
valuefrompromt = prompt("Contribute to the team (Minimum KES 100) and become registered in the official Gor Mahia F.C. Fanclub! Membership is valid for 6 Months after which it needs to be renewed.", "100");
}
if ((valuefrompromt != 0) && (isNumber (valuefrompromt))) {
localStorage.setItem('amount',valuefrompromt);
contributiongo();
}
else if (!isNumber (valuefrompromt)) {
alert("Please enter a number");
askhowmuch();
}

}

function complete() {
var lat = localStorage.getItem('latitude');
var long = localStorage.getItem('longitude');
var amount = localStorage.getItem('amount');
var pin = document.getElementById('pin').value;
var city = document.getElementById('city').value;
var gender = document.getElementById('gender').value;
var phone = document.getElementById('phone').value;
var email = document.getElementById('email').value;
var age = document.getElementById('age').value;
var last_name = document.getElementById('last_name').value;
var first_name = document.getElementById('first_name').value;

// alert('Data sent:\n\nfirst_name_en: '+first_name_en+'\nlast_name_en: '+last_name_en+'\nemail_en: '+email_en+'\nphone_en: '+phone_en+'\ngender_en: '+gender_en+'\ncity_en: '+city_en+'\npin_en: '+pin_en+'\nlong: '+long+'\nlat: '+lat+'\namount: '+amount+'');

document.location.href='http://enunua.com/gormahia/fan_number.php?pin_en='+pin_en+'&city_en='+city_en+'&gender_en='+gender_en+'&phone_en='+phone_en+'&email_en='+email_en+'&age_en='+age_en+'&last_name_en='+last_name_en+'&first_name_en='+first_name_en+'&lat='+lat+'&long='+long+'&amount='+amount+'';

}