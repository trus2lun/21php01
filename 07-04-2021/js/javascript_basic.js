for (var i = 0; i < 10; i++) {
	document.write(i);
	document.write("<br>");
}

for (var i = 10; i > 0; i--) {
	document.write(i);
	document.write("<br>");
}
// BT: In ra dãy số từ 0 đến 100
// - Nếu số đó chia hết cho 3 thì in ra số x chia hết cho 3
// - Nếu số đó chia hết cho 5 thì in ra số x chia hết cho 5
// - Nếu số đó chia hết cho 15 thì in ra số x chia hết cho 15 mà không in ra
// số x chia hết cho 3 và số x chia hết cho 5
// - Nếu số đó không chia hết cho 3,5,15 thì in ra: số x không chia hết cho 3,5,15

for (var x = 0; x <= 100; x++) {
	document.write('<br>');
	if (x % 15 == 0) {
		document.write(x + " chia het cho 15 <br>");
	} else if (x % 3 == 0) {
		document.write(x + " chia het cho 3 <br>");
	} else if (x % 5 == 0) {
		document.write(x + " chia het cho 5 <br>");
	} else {
		document.write(x + " khong chia het cho 3 va 5 va 15 <br>");
	}
}

// Cho 1 số, kiểm tra số đó nếu là bằng 2 thì in ra là "Monday",...
// 8 thì in ra  "Sunday", nếu không nằm trong 2 đến 8 thì in ra 
// "No day"

var num = 3;	
prompt(num);
switch(num){
	case 2:
		document.write('Monday');
		break;
	case 3:
		document.write('Tuesday');
		break;
	case 4:
		document.write('Wednesday');
		break;
	case 5:
		document.write('Thursday');
		break;
	case 6:
		document.write('Friday');
		break;
	case 7:
		document.write('Saturday');
		break;
	case 8:
		document.write('Sunday');
		break;
}