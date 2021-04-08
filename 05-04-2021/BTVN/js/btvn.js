//BT2: Cho ban 2000 vnđ đi mua kẹo .Biết :
//1 viên kẹo giá 200 vnđ.
//cứ 2 vỏ kẹo đổi được 1 viên.
//Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?
var sotien = 2000;
var gia = 200;
function baonhieukeo(){
	var sokeomuaduoc = Math.floor(sotien/gia);
	var sovokeo = sokeomuaduoc;
	var soKeoDoiDk = 0;
	do {
		soKeoDoiDk = Math.floor(sovokeo/2);
		sovokeo = soKeoDoiDk + ( sovokeo % 2 );
		sokeomuaduoc += soKeoDoiDk;  
	} while( sovokeo > 1 )
		document.write("So keo co duoc la: ");
		document.write(sokeomuaduoc);
}
baonhieukeo();
document.write('<br>')
