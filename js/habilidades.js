var habilidades = [{
		Nombre:"Crimson Mirror",
		habilidad:function () {
			cont1.estadisticas.maxvit += 5;
			cont1.estadisticas.vit += 5;
		},
		img: "img/descarga.png",
		detalles: "+5 vitalidad"
	},{
		Nombre:"Anillo Gorom",
		habilidad:function () {
			cont1.estadisticas.fuerza += 5;
		},
		img: "img/dark_sword.png",
		detalles:"+5 de fuerza"
	},
	{
		Nombre:"Muramasa",
		habilidad:function () {
			let s = (50 * cont1.estadisticas.maxvit) / 100;
			cont1.estadisticas.fuerza += 20;
			cont1.estadisticas.vit = s;
			cont1.estadisticas.maxvit = s;

		},
		img: "img/muramasa.png",
		detalles:"+20 de fuerza. -50% vit"
	},
	{
		Nombre:"Bloody Mary",
		habilidad:function () {
			let s = (10 * cont1.estadisticas.defensa) / 100;
			cont1.estadisticas.defensa = s;
			cont1.estadisticas.vit += 50;
			cont1.estadisticas.maxvit += 50;
			console.log(s);

		},
		img: "img/dark_sword.png",
		detalles:"+50 de vitalidad. -90% de def"
	},
	
	

	];