var d = new Date();

runDigitalClock();
setInterval(runDigitalClock, 1000);
function runDigitalClock() {
	var d = new Date();
	//console.log(d)
	var clock = document.getElementById('clock');

	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	// для отобржения 2х значного числа
	if(h < 10){ h = '0' + h };
	if(m < 10){ m = '0' + m };
	if(s < 10){ s = '0' + s };
	clock.innerHTML = h + ' : ' + m + ' : ' + s;
};

window.onload = dayOfWeek();
function dayOfWeek(){
	var dayN = d.getDay();
	var listOfDays = ['Su','Mo','Tu','We','Th','Fr','Sa'];
	// console.log(listOfDays[dayN]);
	document.getElementById('days').children[dayN].innerHTML = '<b>' + listOfDays[dayN] + '</b>';
};

//console.log( document.getElementById('days').children[1] );
//document.getElementById('days').children[1].innerHTML = '55555';
