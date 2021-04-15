function changeImage(id, img, name) {
	document.getElementById('default').src = img;
	document.getElementById('name_text').innerHTML = name;
	document.getElementById('name_text').style.fontSize = '250%';
	document.getElementById('panic').style.border = 'none';
	document.getElementById('dance-cat').style.border = 'none';
	document.getElementById('dance').style.border = 'none';
	document.getElementById('dog').style.border = 'none';
	document.getElementById(id).style.border = '4px solid red';
}