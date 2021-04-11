var result = '';	
var newResult = '';
function addChar(number) {
	result += number;
	document.getElementById('result').innerHTML = result;
}
function calcResult() {
	document.getElementById('result').innerHTML = Math.ceil(eval(result) * 100000)/100000;
}
function resetCal() {
	result = '';
	document.getElementById('result').innerHTML = '0';
}