// 1. Khởi tạo danh sách gồm 4 học viên của lớp gồm họ và tên, tuổi, email, quê quán
// 2. In danh sách thông tin học viên ra
// 3. Thêm thông tin 2 học viên mới và in ra danh sách lớp
// 4. Đổi tên học viên có tên Huy thành Hùng và in ra danh sách lớp mới
// 5. Đổi quê quán học viên quê quán ở Đà Nẵng hoặc xài gmail thành quê quán Hải Phòng và in ra danh sách lớp mới
// 6. Bỏ học viên tuổi  từ 23-26 ra khỏi danh sách lớp học và in ra danh sách lớp mới

var HocVien = [
				["Nguyễn Văn A", "21", "example1@gmail.com", "Đà Nẵng"],
				["Nguyễn Đỗ B", "25", "example2@gmail.com", "Đà Nẵng"],
				["Ngyễn Hoàng C", "22", "example3@gmail.com", "Quảng Nam"],
];
document.write('Danh sách thông tin học viên: <br>');
for (var i = 0; i < HocVien.length; i++) {
	document.write(i+1 + ' . ');
	for (var j = 0; j < HocVien[i].length; j++) {
		if (j == HocVien[i].length - 1) {
			document.write(HocVien[i][j] + '<br>');
		} else {
			document.write(HocVien[i][j] + '&nbsp;&nbsp;&nbsp;');
		}
	}
}
document.write('----------------------<br>');
document.write('Danh sách thông tin học viên thêm 2 người: <br>');
var HocVien_New = [
					["Nguyễn Công Huy", "24", "example4@gmail.com", "Cali"],
					["Nguyễn Hạnh E", "18", "example5@gmail.com", "Thanh Hóa"],
]
var addHocVien = HocVien.concat(HocVien_New);
for (var i = 0; i < addHocVien.length; i++) {
	document.write(i+1 + ' . ');
	for (var j = 0; j < addHocVien[i].length; j++) {
		if (j == addHocVien[i].length - 1) {
			document.write(addHocVien[i][j] + '<br>');
		} else {
			document.write(addHocVien[i][j] + '&nbsp;&nbsp;&nbsp;');
		}
	}
}
document.write('----------------------<br>');
document.write('Danh sách thông tin học viên đổi tên học viên tên Huy thành tên Hùng: <br>');
var updateHocVien = [];
for (var i = 0; i < addHocVien.length; i++) {
	var TenHocVien = addHocVien[i][0].slice(addHocVien[i][0].lastIndexOf(' ') + 1);
	if (TenHocVien == 'Huy') {
		var HoHocVien = addHocVien[i][0].slice(0, addHocVien[i][0].lastIndexOf(' ') + 1);
		addHocVien[i][0] = HoHocVien + ' Hùng ';
	}
}
for (var i = 0; i < addHocVien.length; i++) {
	document.write(i+1 + ' . ');
	for (var j = 0; j < addHocVien[i].length; j++) {
		if (j == addHocVien[i].length - 1) {
			document.write(addHocVien[i][j] + '<br>');
		} else {
			document.write(addHocVien[i][j] + '&nbsp;&nbsp;&nbsp;');
		}
	}
}
document.write('----------------------<br>');