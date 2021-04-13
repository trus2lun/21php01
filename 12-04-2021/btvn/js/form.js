function LienHeVoiChungToi() {
	var name, email, title, content;
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	title = document.getElementById('title').value;
	content = document.getElementById('content').value;
	
	if (name == '') {
		document.getElementById('errorName').innerHTML = 
		'Nhap ten vao';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('errorEmail').innerHTML = 
		'Nhap ten vao';
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if (title == '') {
		document.getElementById('errorTitle').innerHTML = 
		'Nhap ten vao';
	} else {
		document.getElementById('errorTitle').innerHTML = '';
	}
	if (content == '') {
		document.getElementById('errorContent').innerHTML = 
		'Nhap ten vao';
	} else {
		document.getElementById('errorContent').innerHTML = '';
	}
}