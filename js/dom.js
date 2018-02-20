
// Clase para generar los usuarios por defecto

// var clases = 'comentario car col-sm-5 col-md-5 col-lg-5 col-xl-5';
class Usuario {
	constructor(fecha,nombre,mensaje){
		this.nombre = nombre;
		this.mensaje = mensaje;
		this.fecha = fecha;
	}
	comenta(){
		var cajaComentarios = document.getElementsByClassName('comentarios')[0];
		var comentario = document.createElement('div');
		// comentario.setAttribute('class',clases);
		comentario.innerHTML = '<h3>"' + this.mensaje + '"</h3>' + '<p>' + this.nombre + '</p>' + '<p><strong>'+ this.fecha + '</strong></p>';
		cajaComentarios.appendChild(comentario);
	}
}

var user1 = new Usuario(new Date(2017,2,1,16,34).toLocaleString(),'Uganda Knuckles','Estoy encantado con esta empresa, su servicio es excelente y conoce bien su producto');
var user2 = new Usuario(new Date(2017,3,1,11,9).toLocaleString(),'Haruhi Suzumiya','Compre uno hace 1 año y sin problemas, tuve un fallo al principio pero no tardaron en arreglarmelo');
var user3 = new Usuario(new Date(2017,5,5,20,7).toLocaleString(),'Adam Locker','Vine por recomendación de un amigo y la verdad que muy satisfecho. Volveré a comprar seguramente');

function crearUsuarios(){
	user1.comenta();
	user2.comenta();
	user3.comenta();
}




// Creacion de usuarios y su comentario
$('.enviarComentario').click(function(event) {
	var cajaTexto = $('textarea').val().trim();
	if(getCookie('user')!=null && cajaTexto!=''){
		var mensaje = document.getElementsByTagName('textarea')[0].value;
		var nombre = getCookie('user');
		var fecha = new Date().toLocaleString();
		var user = new Usuario(fecha,nombre,mensaje);
		user.comenta();
	}else if(cajaTexto==''){
		$('.modal-body').text('Deberias rellenar algo');
		$('[data-toggle="modal"]').trigger('click');
	}else {
		$('.modal-body').text('Primero debes iniciar sesión o regristrarte.');
		$('[data-toggle="modal"]').trigger('click');
		$('[data-dismiss="modal"]').click(function(event) {
			location.href = 'formularios/index.html';
		});
	}
	$('textarea').val('');
});


function cargarMedianteDOM(){
	tarjeta();
	listaPaises();
}





// Generación de paises
function listaPaises(){

    var paises = ["","Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia-Herzegovina","Botsuana","Brasil","Brunéi	Bandar","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guinea","Guinea Ecuatorial","Guinea-Bisáu","Guyana","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kosovo","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Palestina","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República Democrática del Congo","República Dominicana","Ruanda","Rumania","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudáfrica","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Taiwán","Tanzania","Tayikistán","Timor","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"];

    var select = $('.pais')[0],
        option;

    paises.forEach(pais => {
        option = document.createElement("option");
        option.setAttribute("value", pais);
        option.innerHTML = pais;
        select.appendChild(option);
    });

}

// Ocultar y mostrar la tarjeta de crédito
function tarjeta(){
	var controladoresTarjeta = document.querySelectorAll('.dir,.pais');
	var cont1,cont2;

	controladoresTarjeta[0].addEventListener('change',()=>{
		cont1 = (controladoresTarjeta[0].value!='');
	});
	controladoresTarjeta[1].addEventListener('change',()=>{
		cont2 = (controladoresTarjeta[1].value!='');
	});
	controladoresTarjeta.forEach(controlador => controlador.addEventListener('change',function(){
		var tarjeta = document.getElementsByClassName('divTarjeta')[0];
		if(cont1 && cont2) {
			tarjeta.style.display = 'block';
		}else {
			tarjeta.style.display = 'none';
			tarjeta.getElementsByTagName('input')[0].value = '';
		}
	}));
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



