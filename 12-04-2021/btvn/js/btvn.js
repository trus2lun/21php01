// tạo tam giác cân
document.write('---------BT1<br>');
// var soDong = prompt("Nhap do dai canh ");
// for (var i = 1; i <= soDong; i++) {
// 	document.write('<br>');
// 	for (var j = 1; j <= i; j++) {
// 		document.write('*' + '&nbsp;&nbsp;');
// 	}
// }
document.write('<br>');	
document.write('---------BT2<br>');
// tạo tam giác đều
var x = prompt("Nhap chieu cao tam giac");
document.write('<table>');
for (var i=0; i<x; i++) {
	document.write('<tr>');
	for (var k=x-1; k>i; k--) {
		document.write('<td>');
		document.write(' ');
		document.write('</td>')
	}
	for (var k=1; k<=i*2+1 ; k++) {
		document.write('<td>');
		document.write('*');
		document.write('</td>');
	}
	document.write('</tr>');
}	
document.write('</table>');
// 1
// 2 3
// 4 5 6
// 7 8 9 10
document.write('---------BT3')
document.write('<br>')
var soTuNhien = 1;
var soDong = 4;
for (var i = 1; i <= soDong; i++) {
	document.write('<br>');
	for (var j = 1; j <= i; j++) {
		document.write(soTuNhien + '&nbsp;&nbsp;');
		soTuNhien++
	}
}
document.write('<br>')
// 823749283423423423423429483394
// document.write('---------BT4<br>');
// var num = [8,2,3,7,4,9,2,8,3,4,2,3,4,2,3,4,2,3,4,2,3,4,2,9,4,8,3,3,9,4];
// num.sort();
// document.write(num);
// document.write('<br>');
// num.sort(function(a, b){return b - a});
// document.write(num);
// document.write('<br>');