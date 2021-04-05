//BT2: Cho ban 2000 vnđ đi mua kẹo .Biết :
//1 viên kẹo giá 200 vnđ.
//cứ 2 vỏ kẹo đổi được 1 viên.
//Hỏi với 2000 vnđ, ban sẽ mua đc bao nhiêu viên kẹo ?
var Sotien = 2000;
var giatienkeo = 200;
function baonhieukeo(){
	var Sokeomuaduoc = Math.floor(Sotien/giatienkeo);
	var Sovokeo = Sokeomuaduoc;
	var Sokeodoiduoc = 0;
	do {
		Sokeodoiduoc = Math.floor(Sovokeo/2);
		Sovokeo = Sokeodoiduoc + ( Sovokeo % 2 );
		Sokeomuaduoc += Sokeodoiduoc;  
	} while( Sovokeo > 1 )
		document.write("So keo co duoc la: ");
		document.write(Sokeomuaduoc);
}
baonhieukeo();