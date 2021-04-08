var result = '';
function addChar(number) {
	result += number;
	document.getElementById('result').innerHTML = result;
}
function calcResult() {
	document.getElementById('result').innerHTML = eval(result);
}
function resetCal() {
	result = '';
	document.getElementById('result').innerHTML = '0';
}