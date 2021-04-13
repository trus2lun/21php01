function LienHeVoiChungToi() {
	var name, email, title, content;
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	title = document.getElementById('title').value;
	content = document.getElementById('content').value;
	
	if (name == '') {
		document.getElementById('errorName').innerHTML = 
		'Vui lòng nhập tên của bạn';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('errorEmail').innerHTML = 
		'Vui lòng nhập email';
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if (title == '') {
		document.getElementById('errorTitle').innerHTML = 
		'Vui lòng nhập tiêu đề';
	} else {
		document.getElementById('errorTitle').innerHTML = '';
	}
	if (content == '') {
		document.getElementById('errorContent').innerHTML = 
		'Vui lòng nhập nội dung';
	} else {
		document.getElementById('errorContent').innerHTML = '';
	}
}