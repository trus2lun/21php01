// BT1: Có hai tổ công nhân, tổ một có 12 công nhân, 
// tổ hai nếu có thêm 4 người thì sẽ gấp đôi tổ một. Hỏi tổ hai có bao nhiêu công nhân? 
document.write('-------------BT1');
document.write('<br>');
var x = 12;
var y = 2*x-4;
document.write('So cong nhan to 1 la: ' + x);
document.write('<br>');
document.write('So cong nhan to 2 la: ' + y);
document.write('<br>');

// BT2: Cho ban 2000 vnđ đi mua kẹo .
// Biết : 1 viên kẹo giá 200 vnđ. cứ 2 vỏ kẹo đổi được 1 viên. 
// Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ? 
document.write('-------------BT2');
document.write('<br>');

var sotien = 2000;
var gia = 200;
document.write('Voi so tien la: ' + sotien);
document.write('<br>');
document.write('Va gia keo la: ' + gia);
document.write('<br>');
function baonhieukeo(){
	var sokeomuaduoc = Math.floor(sotien/gia);
	var sovokeo = sokeomuaduoc;
	var sokeodoidc = 0;
	do {
		sokedoiduoc = Math.floor(sovokeo/2);
		sovokeo = sokeodoidc + ( sovokeo % 2 );
		sokeomuaduoc += sokeodoidc;  
	} while( sovokeo > 1 )
		document.write("So keo co duoc la: ");
		document.write(sokeomuaduoc);
}
baonhieukeo();
document.write('<br>')
// BT3:Túi thứ nhất có 18 viên bi, 
// túi thứ hai gấp hai lần túi thứ nhất. 
// Hỏi phải chuyển bao nhiêu viên bi từ túi thứ hai sang túi thứ nhất 
// để số bi ở hai túi bằng nhau? 
document.write('-------------BT3');
document.write('<br>');

var i = 0;
var x = 18;
var y = x*2;
document.write("so bi tui thu nhat la: " + x);
document.write('<br>')
document.write("so bi tui thu hai la : " + y);
while(x != y){
	x++;
	y--;
	i++;
}
document.write('<br>');
document.write("so bi ma tui thu hai phai chuyen cho tui thu nhat la : " + i );
document.write('<br>');
// BT4: Bình có 27 quyển sách, 
// Bình có số sách gấp 3 lần số sách của Minh. 
// Hỏi Bình phải chuyển cho Minh bao nhiêu quyển sách 
// để số sách của Bình gấp đôi số sách của Minh?
document.write('-------------BT4');
document.write('<br>');

var i = 0;
var x = 27;
var y = x / 3;
document.write("so sach cua Binh la : " + x);
document.write('<br>')
document.write("so sach cua Minh la : " + y);
while(x != (y * 2)){
	x--;
	y++;
	i++;
}
document.write('<br>');
document.write("so sach cua Binh chuyen cho Minh la : " + i );
document.write('<br>');
// BT5: Dũng có 50 viên bi gồm 2 loại: bi xanh và bi đỏ. 
// Biết rằng nếu lấy 2/5 số bi xanh cộng với 3/4 số bi đỏ thì được 27 viên bi. 
// Hỏi mỗi loại có bao nhiêu viên bi? 
document.write('-------------BT5');
document.write('<br>');
//bi xanh + bi do = 50
//2/5 bi xanh + 3/4 bi do  = 27

function bai5 (a1,b1,c1,a2,b2,c2) {
	let D = a1*b2-a2*b1;
	let Dx = c1*b2-c2*b1;
	let Dy = a1 * c2 - a2 * c1;
	document.write('So bi xanh la: ' + Math.floor(Dx / D));
	document.write('<br>');
	document.write('So bi do la: ' + Math.floor(Dy / D));
	document.write('<br>');
}
bai5(1,1,50,2/5,3/4,27);

// BT6: Một hộp có 120 viên bi gồm bốn màu : đỏ , xanh , vàng, trắng. 
// Số bi màu đỏ chiếm 1/5 tổng số bi , số bi màu xanh chiếm 30% tổng số bi , 
// còn lại là bi màu vàng và trắng . 
// a) Tính số bi màu đỏ ; số bi màu xanh 
// b) Tính số bi màu vàng ; số bi màu trắng biết tỉ số giữa số bi trắng 
// và số bi màu vàng là 3/7 
document.write('-------------BT6');
document.write('<br>');
var tong = 120;
document.write('a) <br>')
var sobido = tong * (1/5);
var sobixanh = tong * (30/100);
document.write('So bi do la: ' + sobido);
document.write('<br>');
document.write('So bi xanh la: ' + sobixanh);
document.write('<br>');
document.write('b) <br>')
var a = sobido + sobixanh;
var b = tong - a;
document.write('Tong so bi do va bi xanh la: ' + a);
document.write('<br>');
document.write('Tong so bi trang va bi vang la: ' + b);
document.write('<br>');
//	so bi trang + so bi vang = tong - so bi xanh - so bi do
//	so bi trang / so bi vang = 3/7
function bai6b (a1,b1,c1,a2,b2,c2) {
	let D = a1*b2-a2*b1;
	let Dx = c1*b2-c2*b1;
	let Dy = a1 * c2 - a2 * c1;
	document.write('So bi trang la: ' + Math.floor(Dx / D));
	document.write('<br>');
	document.write('So bi vang la: ' + Math.floor(Dy / D));
	document.write('<br>');
}
bai5(1,1,60,7,-3,0);

// BT7: Ở trung tâm giải trí Euroland có chiếc máy tự động có thể thực hiện được hai loại giao dịch sau: 
// 1) Bỏ vào 2 euro sẽ nhận được 3 USD và được tặng thêm 1 viên kẹo. 
// 2) Bỏ vào 5 USD sẽ nhận được 3 euro và được tặng thêm 1 viên kẹo. 
// Khi Buratino đến nghịch máy đổi tiền, cậu ta chỉ có toàn USD. 
// Khi cậu ta rời khỏi đó thì tiền đô bị hao hụt đi, không có thêm tiền euro nhưng có được 50 viên kẹo. 
// Hỏi Buratino đã tốn bao nhiêu USD để có được món quà 50 viên kẹo đó?
document.write('-------------BT7');
document.write('<br>');

var soDola = 0;
var soEuro = 0;
var soKeo = 0;
while (soKeo < 50) {
	soDola -= 5;
	soEuro += 3;
	soKeo ++;

	while (soEuro > 0) {
		soEuro -= 2;
		soDola += 3;
		soKeo++;
	}
}
document.write('So dola ton de mua 50 keo la: ' + soDola);
document.write('<br>');