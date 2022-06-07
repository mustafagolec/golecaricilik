alert("Oturumunuz sonlanmıştır, tekrar giriş yapınız.\nadmin admin deneyin.");

var kullanicilar = [
	{ // 0. index
		username: "admin",
		password: "admin"
	},
	{ // 1. index
		username: "admin2",
		password: "admin2"
	},
	{ // 2. index
		username: "admin3",
		password: "admin3"
	}

]

function oturumAc() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	for(var i = 0; i < kullanicilar.length; i++) {
		if(username == kullanicilar[i].username && password == kullanicilar[i].password) {
			alert("Oturum açma başarılı!");
			return;
		}
	}
    alert("Kullanıcı adı veya şifrenizi kontrol edin!");
}