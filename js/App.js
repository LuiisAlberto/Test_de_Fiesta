var fiestas=[
	new Fiesta("Tu fiesta ideal es una donde seas el alma de la fiestas, el centro de atención y nucan falta el alchol si tu estas.",""),
	new Fiesta("Tu fiesta ideal es una donde vallas solo por obligación, y tal vez seas el coductor designado.",""),
	new Fiesta("Tu fiesta ideal es una donde te diviertas, pero si hay descontrol te vas.","")
];

var preguntas=[
	new Pregunta("¿Con qué frecuencia vas o realizas fiestas?",[
		new Respuesta("Cada mes.","assets/img/cada_mes.jpeg",[0,1,0] ),
		new Respuesta("Cada fin de semana, siempre.","assets/img/todos_los_fines.jpeg",[1,0,0]),
		new Respuesta("En ocasiones especiales.","assets/img/ocasiones_especiales.jpeg",[0,1,0])
	]),
	new Pregunta("¿Qué ropa sueles llevar?",[
		new Respuesta("Ropa un poco formal.","assets/img/formal.jpg",[0,1,0]),
		new Respuesta("Algo cómodo.","assets/img/comodo.jpeg",[0,0,1]),
		new Respuesta("Lo que lleve puesto en ese momento.","assets/img/lo_primero.jpeg",[1,0,0])
	]),
	new Pregunta("¿Con qué bebida te identificas más?",[
		new Respuesta("Cualquier bebida que lleve alcohol.","assets/img/cualquier_bebida.jpg",[1,0,0]),
		new Respuesta("Un buen vino.","assets/img/vino.jpg",[0,1,0]),
		new Respuesta("Un cóctel.","assets/img/coctel.jpg",[0,0,1])
	]),
	new Pregunta("¿A dónde te gusta más salir?",[
		new Respuesta("Grandes eventos.","assets/img/grandes_eventos.jpeg",[1,0,0]),
		new Respuesta("Pequeños locales.","assets/img/pequeños_locales.jpeg",[0,0,1]),
		new Respuesta("Casas de otros.","assets/img/casas_de_otros.jpeg",[1,0,0])
	]),
	new Pregunta("Si hay alcohol en una fiesta ¿Cuánto bebes?",[
		new Respuesta("Nada, me empedo con olerlo.","assets/img/solo_olerlo.jpeg",[0,1,1]),
		new Respuesta("Hasta que se acabe, y voy por más.","assets/img/voy_por_mas.jpeg",[2,0,0]),
		new Respuesta("Hasta que se terminte, pero no compro.","assets/img/no_compro.jpeg",[1,0,0]),
	])
];

var content_pregunta=document.getElementById('content-pregunta');
var content_modal=document.getElementById('content-modal');
var content_respuestas=[
	document.getElementById('content-res1'),
	document.getElementById('content-res2'),
	document.getElementById('content-res3')
];
var content_progress=document.getElementById('progress-bar');

var quizz=new Quizz(this.preguntas,this.fiestas,this.content_pregunta,this.content_respuestas,this.content_progress,this.content_modal);
quizz.inicio();

document.getElementById('btn-resert').addEventListener("click",()=>{
	this.quizz.resert();
});