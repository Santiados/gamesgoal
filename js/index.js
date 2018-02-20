		var x = 0, y=0;

		var carrusel = $('div.carrusel');
		var carruselPos = carrusel.scrollLeft();
		var scrollCompleto = (carrusel[0].scrollWidth - carrusel.innerWidth());
		console.log('Scroll completo: ' + scrollCompleto)

		console.log('Todo sale bien je');
			

		function scrollwin(){
			window.scroll({
			  top: 0, 
			  left: 0, 
			  behavior: 'smooth' 
			});
		}

		// Animación carrusel al inicio
		carrusel.animate({
			scrollLeft : 1000
			},500);



		// Funcion de carrusel hecha a mano, usando jquery unicamente
		$('img.mvI,img.mvD').click(function(){
			x = carrusel.scrollLeft();
			if($(this).hasClass('mvI')){
				x-=450;
				if(x<=100) x = 100;
				carrusel.animate({
					scrollLeft:x
				},600);
			}else {
				x+=450;
				carrusel.animate({
					scrollLeft:x
				},600);
			}

		});

		

		// Función menu
	    $('div.buscar,div.cerrar img').click(function(event) {
	    	if(y==0){
	    		$('div.menu').css('right', '0');
	    		$('div.cuerpo').css('opacity', '0.5');
	    		$('body').css('overflow','hidden');
	    		y++;
	    	}else {
	    		$('div.menu').css('right', '-200%');
	    		$('div.cuerpo').css('opacity', '1');
	    		$('body').css('overflow','auto');
	    		y--;
	    	}
	    });
		
		

		
		    
		// Animacion del header y fade al hacer scroll
		$(document).scroll(function(event) {
			// Efectos en el header durante el scroll
			var pixelesNavegador = document.body.scrollTop || document.documentElement.scrollTop;
			var logo = $('div.header ');
			if (pixelesNavegador < 100 ) {
				logo.css('padding', '1% 0');
			}else {
				logo.css('padding', '0 0');
			}
			var header = $('div.header');
			if(pixelesNavegador > 2000) {
				header.css('top', '-500px');
			}else {
				header.css('top', '0px');
			}


			// Efecto fade al hacer scroll
			if($(document).width()>550){
				var coleccionHijos = document.querySelectorAll('article > *');
				var limite = (screen.width/2)*1.5;
				for (var i = 2; i < coleccionHijos.length; i++) {
					if(coleccionHijos[i].getBoundingClientRect().top<limite){
						$(coleccionHijos[i]).css('animation-name', 'fade');	
					}
				}
			}


		});

		

		// Boton subir
		document.getElementsByClassName('subir')[0].addEventListener('click',scrollwin);
		

			
		// Slider imagenes
		var indiceImagen = 0;
		function slider() {
		    var imagenes = document.getElementsByClassName("imagen");
		    for (var i = 0; i < imagenes.length; i++) {
		        imagenes[i].parentNode.className='sinEfecto';
		    }
		    indiceImagen++;
		    if(indiceImagen> imagenes.length){indiceImagen=1;}
		    imagenes[indiceImagen-1].parentNode.className='efecto';
		    setTimeout(slider,2500);

		}



		$('.redirigir').click(function(event) {
			console.log('funciona')
			location.href = 'errores/index.html'
		});
		// Función para detectar cambios durante las búsquedas
		var observer = new MutationObserver(function(mutations) {
			$('.redirigir').click(function(event) {
				console.log('funciona')
				location.href = 'errores/index.html'
			});
		});
		var observerConfig = {
			attributes: true, 
			childList: true, 
			characterData: true 
		};

		var targetNode = document.getElementsByClassName('objetos')[0];
		observer.observe(targetNode, observerConfig);
		

		