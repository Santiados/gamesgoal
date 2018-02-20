

function cargar(){

    if(getCookie('user')==null){location.href='../index.html'}

	var username = getCookie('user');
	var user = getCookie(username);
    var array = user.split('?');
    var carta = document.getElementsByClassName('carta')[0];
    for (var i = 0; i < array.length; i++) {
        var elemento = array[i].split(':');
        if(elemento[0]=='username'){
            var caja = document.createElement('h2');
            caja.innerHTML = 'Nombre: ' +  elemento[1];
            carta.appendChild(caja);
        }else if(elemento[0]!='password' && elemento[0]!='username' && elemento[0]!=''){
            var caja = document.createElement('p');
            if(elemento[0]=='NOVEDADES' || elemento[0]=='REVISTA'){
                caja.innerHTML = elemento[0]+': <span>OK</span>';
                carta.appendChild(caja);
            }else {
                caja.innerHTML = elemento[0]+': ' + elemento[1];
                carta.appendChild(caja);
            }
        }
    }
	document.getElementsByClassName('log-out')[0].addEventListener('click', function(){
		location.href='../index.html'
		document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
	})
	
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}
document.getElementsByTagName('button')[1].addEventListener('click',function(){
    location.href = '../../index.html';
});