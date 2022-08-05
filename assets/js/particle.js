/* ---- particles.js config ---- */

particlesJS('particles-js', {
	particles: {
		number: {
			value: 140,
			density: {
				enable: true,
				value_area: 800
			}
		},
		color: {
			value: [ '#2EB67D', '#e5f784', '#aa2487', '#36C5F0' ]
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#fff'
			},
			polygon: {
				nb_sides: 5
			},
		},
		
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false
			}
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: false,
				speed: 10,
				size_min: 10,
				sync: false
			}
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: '#808080',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 5,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'push'
			}
		},
		modes: {
			'repulse' : {
				distance: 70,
				duration: 0.4
			},
			'push' : {
				particles_nb: 4
			}
		}
	},
	retina_detect: true
});
const allElements = document.querySelectorAll('.animated-text');

// Comprueba si hay al menos un elemento
if (allElements.length > 0) {
	//Ejecuta el script para cada elemento encontrado.
	allElements.forEach((element) => {
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // Hace una matriz de palabras a partir del atributo de datos.

		let wordsCount = 0;

		entry();

		// Función inicial
		function entry() {
			if (wordsCount < words.length) {
				// Ejecuta el código para cada palabra.
				let word = words[wordsCount],
					txtArr = word.split(''), // Hace una matriz de letras en la palabra.
					count = 0;

				txtElement.textContent = ''; //Elimina el texto anterior del elemento.

				// Para cada letra de la matriz
				txtArr.forEach((letter) => {
					// Reemplaza el espacio vacío por el HTML "sin espacio de descanso" ...
					// ... Esto es necesario para separar las palabras correctamente
					let _letter = letter === ' ' ? '&nbsp;' : letter;

					// Envuelve cada letra con un "intervalo" y vuelve a colocar todas las letras en el elemento.
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;

				// Establece el intervalo entre cada letra que muestra
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);

						//Espera 4 segundos para empezar a borrar la palabra.
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					// Establece el intervalo entre cada letra que se oculta
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;

							// Después de eliminar la última letra, vuelva a llamar a la función inicial
							entry();
						}
					}
				}
			} else {
				// Si el código llega a la última palabra
				//Resetea el contador de palabras ...
				wordsCount = 0;
				// ... y vuelve a llamar a la función inicial.
				entry();
			}
		}
	});
}
