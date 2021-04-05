function testExternal(){
	document.getElementById("test_external").innerHTML = "Hi all bro";
}
function change_content() {
	document.getElementById("change_content").innerHTML = "Đây là nội dung mới";
}
function change_content_2() {
	document.getElementById("change_content").innerHTML = "Đây là nội dung đầu tiên";
}
function changeImage() {
	document.getElementById("change_image").src="image/dog.jpg";
}
function changeStyle(){
	document.getElementById("box-demo").style.width = "400px";
	document.getElementById("box-demo").style.background = "blue";
}
function hideImage() {
	document.getElementById("change_image").style.display = "none";
}
function showImage() {
	document.getElementById("change_image").style.display = "block";
}