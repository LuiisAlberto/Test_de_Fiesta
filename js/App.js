var fiestas=[
	new Fiesta("Tu fiesta ideal es una donde seas el alma de la fiestas, el centro de atención y nucan falta el alchol si tu estas.",""),
	new Fiesta("Tu fiesta ideal es una donde vallas solo por obligación, y tal vez seas el coductor designado.",""),
	new Fiesta("Tu fiesta ideal es una donde te diviertas, pero si hay descontrol te vas.","")
];

var preguntas=[
	new Pregunta("¿Con qué frecuencia vas o realizas fiestas?",[
		new Respuesta("Cada mes.","assets/img/pre1_res1.jpeg",[0,1,0]),
		new Respuesta("Cada fin de semana, siempre.","assets/img/pre1_res2.jpg",[1,0,0]),
		new Respuesta("En ocasiones especiales.","assets/img/pre1_res3.jpg",[0,1,0])
	]),
	new Pregunta("¿Qué ropa sueles llevar?",[
		new Respuesta("Ropa un poco formal.","assets/img/pre2_res1.jpg",[0,1,0]),
		new Respuesta("Algo cómodo.","assets/img/pre2_res2.jpg",[0,0,1]),
		new Respuesta("Lo que lleve puesto en ese momento.","assets/img/pre2_res3.jpg",[1,0,0])
	]),
	new Pregunta("¿Con qué bebida te identificas más?",[
		new Respuesta("Cualquier bebida que lleve alcohol.","assets/img/pre3_res1.jpg",[1,0,0]),
		new Respuesta("Un buen vino.","assets/img/pre3_res2.jpg",[0,1,0]),
		new Respuesta("Un cóctel.","assets/img/pre3_res3.jpg",[0,0,1])
	]),
	new Pregunta("¿A dónde te gusta más salir?",[
		new Respuesta("Grandes eventos.","assets/img/pre4_res1.jpg",[1,0,0]),
		new Respuesta("Pequeños locales.","assets/img/pre4_res2.jpg",[0,0,1]),
		new Respuesta("Casas de otros.","assets/img/pre4_res4.jpg",[1,0,0])
	]),
	new Pregunta("Si hay alcohol en una fiesta ¿Cuánto bebes?",[
		new Respuesta("Nada, me empedo con olerlo.","assets/img/pre5_res1.jpg",[0,1,1]),
		new Respuesta("Hasta que se acabe, y voy por más.","assets/img/pre5_res2.jpg",[2,0,0]),
		new Respuesta("Hasta que se terminte, pero no compro.","assets/img/pre5_res3.jpg",[1,0,0]),
	])
];

var content_pregunta=document.getElementById('content-pregunta');
var content_respuestas=[
	document.getElementById('content-res1'),
	document.getElementById('content-res2'),
	document.getElementById('content-res3')
];
var content_progress=document.getElementById('progress-bar');

var quizz=new Quizz(this.preguntas,this.fiestas,this.content_pregunta,this.content_respuestas,this.content_progress);
quizz.inicio();