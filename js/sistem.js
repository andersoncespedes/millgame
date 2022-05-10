
	const preguntas = [{
		pregunta1:"¿Año del discurso 'i have a dream' de Martin Luther King?",
		respuestas:['1967',
			'1965',
			'1963',
			'1969',
			 '1963']

		
	},{
		pregunta1:'¿Apolo de la mitologia Griega era el dios de?',
		respuestas:['Los Ladrones',
			'La Humanidad',
			'El Sol',
			'La Guerra',
			 'El Sol']
		
	},{
		pregunta1:'¿Diosa de la Luna segun la mitologia Griega?',
		respuestas:['Artemisa',
			'Apolo',
			'Hermes',
			'Zeus',
			 'Artemisa']
		
	},{
		pregunta1:'¿Quien fue el creador de los humanos segun la mitologia Griega?',
		respuestas:['Zeus',
			'Prometeo',
			'Poseidon',
			'Urano',
			 'Prometeo']
		
	},{
		pregunta1:'¿Hermano de Freyia de la mitologia nordica?',
		respuestas:['Frey',
			'Fir',
			'Faldr',
			'Loki',
			 'Frey']
		
	},{
		pregunta1:'¿Pokemones Iniciales de Pokemon Rojo y Azul?',
		respuestas:['Bulbasaur‎, Charmander‎ y Squirtle‎',
			'Treecko, Torchic y Mudkip',
			'Chikorita,Cyndaquil y Totodile',
			'Turtwig, Chimchar y Piplup',
			 'Bulbasaur‎, Charmander‎ y Squirtle‎']
		
	},{
		pregunta1:'¿QUIEN FUE EL PRIMER HOMBRE EN EL ESPACIO?',
		respuestas:['Buzz Aldrin',
			'Alan Shepard',
			'Neil Amstrong',
			'Yuri Gagarin',
			 'Yuri Gagarin']
		
	},{
		pregunta1:'¿LA PRIMERA MUNDIAL INICIO EN?',
		respuestas:['1912',
			'1918',
			'1914',
			'1910',
			 '1914']
		
	},
	{
		pregunta1:'¿MONSTRUO DE TRES CABEZAS QUE RESGUARDA EL INFRAMUNO?',
		respuestas:['Cerbero',
			'Hidra',
			'Ziz',
			'Leviathan',
			 'Cerbero']
		
	},
	{
		pregunta1:'¿La guerra de los emu se desarrollo?',
		respuestas:['Durante la primera guerra mundial',
			'Antes de la segunda guerra mundial',
			'Despues de la primera guerra mundial',
			'Despues de la guerra fria',
			 'Despues de la primera guerra mundial']
		
	},
	{
		pregunta1:'¿Año de la muerte del ultimo emperador de Rusia Nikolái Aleksándrovich Románov?',
		respuestas:['1916',
			'1920',
			'1918',
			'1913',
			 '1918']
		
	},
	{
		pregunta1:'¿Primer heroe mitologico de la historia?',
		respuestas:['Perseo',
			'Gilgamesh',
			'Sanson',
			'Sieg',
			 'Gilgamesh']
		
	},
	{
		pregunta1:'¿La guerra de los 100 años fue un conflicto belico entre?',
		respuestas:['Francia e inglaterra',
			'Inglaterra y Holanda',
			'China y Japon',
			'Grecia y Persia',
			 'Francia e inglaterra']
		
	},
	{
		pregunta1:'¿Reino de la muerte segun la mitologia nordica?',
		respuestas:['Nibbleheim',
			'Helheim',
			'Nidavellir',
			'Jotunheim',
			 'Helheim']
		
	},
	{
		pregunta1:"¿Significado real de 'Amen'?",
		respuestas:['Si Dios quisiera',
			'Como Dios quiere',
			'Que asi sea',
			'Alabado sea',
			 'Que asi sea']
		
	},
	{
		pregunta1:'¿Personaje aliado recurrente en la saga Final Fantasy?',
		respuestas:['Cid',
			'Gilgamesh',
			'Garland',
			'Caos',
			 'Cid']
		
	},
	{
		pregunta1:'¿Quien sucedio al emperador Adriano en el puesto de emperador Romano?',
		respuestas:['Caligula',
			'Nerom',
			'Severo',
			'Marco Aurelio',
			 'Marco Aurelio']
		
	},
	{
		pregunta1:'¿FILOSOFO GRIEGO QUE VIVIA COMO VAGABUNDO?',
		respuestas:['Flavio Arriano',
			'Diogenes',
			'Aristoteles',
			'Arquimedes',
			 'Diogenes']
		
	},
	{
		pregunta1:'¿Natalicio de Simon Bolivar?',
		respuestas:['03 de enero de 1782',
			'13 de noviembre de 1782',
			'24 de julio de 1783',
			'20 de mayo de 1782',
			 '24 de julio de 1783']
		
	},
	{
		pregunta1:"¿'Hombres de maiz' fue una novela escrita por?",
		respuestas:['Gabriel Garcia marquez',
			'Miguel Angel Asturias',
			'Carlos Fuentes',
			'Miguel Otero Silva',
			 'Miguel Angel Asturias']
		
	},
	{
		pregunta1:'¿Dictador facista que ejercio desde 1902-1945?',
		respuestas:['Winston Churchil',
			'Josef Stalin',
			'Adolf Hitler',
			'Benito Mussolini',
			 'Benito Mussolini']
		
	},
	{
		pregunta1:'¿Monstruo defensor de los cielos y las aves segun la biblia?',
		respuestas:['Leviathan',
			'Behemoth',
			'Ziz',
			'Chimera',
			 'Ziz']
		
	},
	{
		pregunta1:'¿Guerrero nordico inmortal bañado en sangre de dragon?',
		respuestas:['Siegfried',
			'Beouwolf',
			'Hagbard',
			'Ragnar',
			 'Siegfried']
		
	},
	{
		pregunta1:'¿EL RETRATO DE DORIAN GRAY FUE ESCRITO POR?',
		respuestas:[
			'Dorian Gray',
			'Oscar Wilde',
			'Julio Verne',
			'Carlos Fuentes',
			 'Oscar Wilde']
		

		}
	
	];

var nivel = [{
		name:'Croco',
		png:'Imagen2.png',
		poderes:[
			{'NORMAL':2}, 
			{'DESTRUCCION':6},
			 {'ASESINO':10}, 
			 {'TORNADO':14}, 
			 {'M':12}, 
			 {'S':16}, 
			 {'7':20}],
			random:function() {
				return Math.round(Math.random()*(0-6) + 6);
			} ,
		estadisticas:{
				vitMaxima:10,
				vit:10,
				minVit:0,
				fuerza:3,
				defensa:2,
				defensaMagica:1
			}

},
	{name:'Croco',
		png:'Imagen2.png',
		poderes:[
			{'NORMAL':2}, 
			{'DESTRUCCION':6},
			 {'ASESINO':10}, 
			 {'TORNADO':14}, 
			 {'M':12}, 
			 {'S':16}, 
			 {'7':20}],
			random:function() {
				return Math.round(Math.random()*(0-6) + 6);
			} ,
		estadisticas:{
				vitMaxima:10,
				vit:10,
				minVit:0,
				fuerza:3,
				defensa:2,
				defensaMagica:1
			}

}
]