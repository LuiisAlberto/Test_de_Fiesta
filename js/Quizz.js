class Quizz{

	constructor(preguntas,fiestas,obj_pregunta,obj_respuestas,obj_progress,content_modal){
		this.preguntas=preguntas;
		this.indice_actual=0;
		this.fiestas=fiestas;
		this.obj_pregunta=obj_pregunta;
		this.obj_respuestas=obj_respuestas;
		this.content_modal=content_modal;
		this.actual={
			pregunta:null,
			respuestas:null,
			respuesta_sele:null
		};
		this.obj_progress=obj_progress;
		this.aumento=100/this.preguntas.length;
	}

	progreso(){
		let actual=Number(this.obj_progress.style.width.replace("%",""));
		this.obj_progress.style.width=(actual+this.aumento)+"%";
		this.obj_progress.innerHTML=(actual+this.aumento)+"%";
	}

	inicio(){
		this.content_modal.style.display="none";
		this.preguntar();
		this.obj_respuestas.forEach((res,indice)=>{
			res.addEventListener("click",()=>{
				this.responder(this.actual.respuestas[indice]);
			});
		});
	}

	preguntar(){
		this.actual.pregunta=this.preguntas[this.indice_actual];
		this.actual.respuestas=this.preguntas[this.indice_actual].respuestas;
		this.actual.respuesta_sele=null;
		this.obj_pregunta.innerHTML=this.actual.pregunta.texto;
		this.obj_respuestas.forEach((res,indice)=>{
			res.getElementsByClassName("texto")[0].innerHTML=this.actual.pregunta.respuestas[indice].texto;
			res.getElementsByClassName("img")[0].src=this.actual.pregunta.respuestas[indice].img;
		});
	}

	responder(res){
		this.actual.respuesta_sele=res;
		this.actual.respuesta_sele.puntajes.forEach((puntaje,indice)=>{
			this.fiestas[indice].puntaje+=Number(puntaje);
		});
		if(this.indice_actual<=this.actual.respuestas.length){
			this.indice_actual++;
			this.preguntar();
			this.progreso();
		}else{
			this.fiesta();
			this.progreso();
		}
	}

	resert(){
		this.content_modal.style.display="none";
		this.indice_actual=0;
		this.preguntar();
		this.obj_progress.style.width="0%";
		this.obj_progress.innerHTML="0%";
	}

	fiesta(){
		let fiesta=this.fiestas.sort((a,b)=>{
			return a.puntaje>b.puntaje?-1:(a.puntaje<b.puntaje)?1:0;
		})[0];
		this.content_modal.style.display="";
		this.content_modal.getElementsByClassName("texto")[0].innerHTML=fiesta.texto;
		this.content_modal.getElementsByClassName("img")[0].src=fiesta.img;
	}

}