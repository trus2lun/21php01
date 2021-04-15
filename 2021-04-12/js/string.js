var myString = "never gonna give you up, never gonna let you down";
var lengString = 0;
lengString = myString.length;
console.log(lengString);

var positionO = 0;
positionO = myString.indexOf('o');
console.log(positionO);

var positionZ = 0;
positionZ = myString.indexOf('z');
console.log(positionZ);

var positionOLast = 0;
positionOLast = myString.lastIndexOf('o');
console.log(positionOLast);

var myCutString = "";
myCutString = myString.substring(12, 23);
console.log(myCutString);

var myCutString2 = "";
myCutString2 = myString.substr(4, 9);
console.log(myCutString2);

var newString = "";
newString = myString.replace("you","damn")
console.log(newString)

// Chuyen thanh chu hoa hoac chu thuong toan bo chuoi

// Khai báo 1 biến chứa họ và tên đầy đủ, ví dụ: "Tran Van Tuan"
// Đếm xem họ có bao nhiêu ký tự, tên đệm có bao nhiêu ký tự, tên có bao nhiêu ký tự
// Thay thế tên bằng chữ "21PHP01"
// Đếm xem có bao nhiêu chữ "n" trong họ và tên
// In ra và bôi màu vàng các chữ cái a, n, t trong họ và tên

var myStr = prompt("Enter your name bro");
var firstSpace = myStr.indexOf(' ');
var firstStr = myStr.substring(0, firstSpace);
document.write("<br> First string: ");
document.write(firstStr);

var lastSpace = myStr.LastindexOf(' ');
var lastStr = myStr.substring(lastSpace, myStr.length);
document.write("<br> Last string: ");
document.write(lastStr);

var midStr = myStr.substring(firstSpace, lastSpace);
document.write("<br> Mid string: ");
document.write(midStr);
// a

var countChar = 0;
var findChar = "n";
var positionChar = 0;

myStr = myStr.toLowwerCase();
findChar = findChar.toLowwerCase();
while (myStr.indexOf(findChar) > -1 ){ 
	positionChar = myStr.indexOf(findChar);
	myStr = myStr.substring(positionChar + 1, myStr.length);
	countChar++;
}
document.write("<br> So ky tu " + findChar + " trong chuoi la: ");
document.write(countChar);