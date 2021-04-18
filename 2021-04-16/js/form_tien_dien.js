function TienDien(form) {
	var name, first_day, last_day, first_number, last_number, gender;
	var totalNumber = 0;
	var totalMooney = 0;
	var printBill = '';

	name = document.getElementById('name').value;

	first_day = document.getElementById('first_day').value;

	last_day = document.getElementById('last_day').value;

	first_number = document.getElementById('first_number').value;

	last_number = document.getElementById('last_number').value;

	date_of_birth = document.getElementById('dateOfBirth').value;

	errorGender == ''

	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your full name!';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (first_day == '') {
		document.getElementById('errorFirstDate').innerHTML = 'Please input the first day of the period!';
	} else {
		document.getElementById('errorFirstDate').innerHTML = '';
	}
	if (last_day == '') {
		document.getElementById('errorLastDate').innerHTML = 'Please input the end of the period!';
	} else {
		document.getElementById('errorLastDate').innerHTML = '';
	}
	if (date_of_birth == '') {
		document.getElementById('errorDate').innerHTML = "Please input your birth day";
	} else {
		document.getElementById('errorDate').innerHTML = '';
	}
	if ((form.gender[0].checked == false) && (form.gender[1].checked == false) && (form.gender[2].checked == false)){
		document.getElementById('errorGender').innerHTML = "Please choose your gender";
	} else {
		document.getElementById('errorGender').innerHTML = ''
	}
	if (first_number == '') {
		document.getElementById('errorFirstNumber').innerHTML = 'Please input electricity numbers at the beginning of the period!';
	} else {
		document.getElementById('errorFirstNumber').innerHTML = '';
	}
	if (last_number == '') {
		document.getElementById('errorLastNumber').innerHTML = 'Please input end of period electricity number!';
	} else {
		document.getElementById('errorLastNumber').innerHTML = '';
	}
	if (first_day > last_day) {
		document.getElementById('errorFirstDate').innerHTML = 'The first day of the period must not be greater than the end of the period!';
	}
	totalNumber = Number(last_number) - Number(first_number);
	if (totalNumber <= 100) {
		totalMoney = totalNumber * 1500;
	}
	if (totalNumber > 100 && totalNumber <= 200) {
		totalMoney = 100 * 1500 + (totalNumber - 100) * 2000;
	}
	if (totalNumber > 200) {
		totalMoney = 100 * 1500 + 100 * 2000 + (totalNumber - 200) * 3500;
	}
	printBill += "<p style='text-align: center;'>Hóa Đơn" + "</p>";
	printBill += "<p>Họ và tên: " + name + "</p>";
	printBill += "<p>Ngày sinh: " + date_of_birth + "</p>";
	printBill += "<p>Số đầu kỳ: " + first_number + "</p>";
	printBill += "<p>Số cuối kỳ: " + last_number + "</p>";
	printBill += "<p>Ngày đầu kỳ: " + first_day + "</p>";
	printBill += "<p>Ngày cuối Kỳ: " + last_day + "</p>";
	printBill += "<p>Tổng tiền: " + totalMoney + "</p>";
	printBill += "<p style='float: right;'>Chữ Ký: <br>" + name + "</p>";
	if (form.gender[0].checked == true) {
		document.getElementById('printBill').innerHTML = printBill;
		document.getElementById('printBill').style.background = '#24F927';
		document.getElementById('printBill').style.color = 'black';
		document.getElementById('printBill').style.height = '300px';
		document.getElementById('printBill').style.width = '200px';;
	}
	if (form.gender[1].checked == true) {
		document.getElementById('printBill').innerHTML = printBill;
		document.getElementById('printBill').style.background = '#FF5DF0';
		document.getElementById('printBill').style.color = 'black';
		document.getElementById('printBill').style.height = '300px';
		document.getElementById('printBill').style.width = '200px';
	}
	if (form.gender[2].checked == true) {
		document.getElementById('printBill').innerHTML = printBill;
		document.getElementById('printBill').style.background = '#000000';
		document.getElementById('printBill').style.color = 'white';
		document.getElementById('printBill').style.height = '300px';
		document.getElementById('printBill').style.width = '200px';
	}
}