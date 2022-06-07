var buttonblue = document.getElementById('aboutbeekeeping');   /*Arıcılık Hakkında butonu üzerine gelince Body'nin rengini değiştiren JS kodu*/
var body = document.body;

buttonblue.onmouseover = function() {
	body.className = 'hovered';
}

buttonblue.onmouseout = function() {
	body.className = '';
}



