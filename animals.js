var qnumber = 1;

//Questions and answers stored in this array.
var stimuli = [
   {
       name: "stim1",
       question: "Tengo noticias de Juana: ya ______________ a su nuevo destino. Ahora busca casa.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
       responseOption3: "llegaba",
     answer: "ha llegado"
   },    
    {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
     responseOption3: "terminaba",
     answer: "he terminado",
   }, 
   {
       name: "stim3",
       question: "Voy a buscar a los niños: ya _________________ de la escuela. Me están esperando.",
       responseOption1: "han salido",
     responseOption2: "salieron", 
     responseOption3: "salían",
     answer: "han salido",
   }, 
   {
       name: "stim4",
       question: "Por fin podemos descansar del ruido: ya __________________ la casa. Está retirando las máquinas.", 
       responseOption1: "han construido", 
       responseOption2: "construyeron", 
     responseOption3: "construían",
     answer: "han construido",
   }, 
   {
       name: "stim5",
       question: "Ana y Luisa están muy contentas: ya _____________________ el maratón de Nueva York. Tienen unas fotos muy bonitas.", 
       responseOption1: "han corrido", 
       responseOption2: "corrieron", 
     responseOption3: "corrían",
     answer: "han corrido",
   }, 
  {
       name: "stim6",
       question: "Pedro está llamando a sus amigos: ya ___________________ la casa y puede salir con ellos esta tarde", 
       responseOption1: "ha limpiado", 
       responseOption2: "limpiaron", 
     responseOption3: "limpiaban",
     answer: "han salido",
   }, 
   {
       name: "stim7",
       question: "Esto no puede continuar así. Pedro ya ___________________ tarde al trabajo tres veces esta semana.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
     responseOption3: "llegaba",
     answer: "ha llegado",
   }, 
   {
       name: "stim8",
       question: "Creo que Luisa y María están muy ocupadas: ya ________________________ tarde del trabajo tres días este mes.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
     responseOption3: "salían",
     answer: "han salido",
   }, 
   {
       name: "stim9",
       question: "Es una negociación muy difícil: ya _____________________ cuatro veces, pero no se ponen de acuerdo.", 
       responseOption1: "se han reunido", 
       responseOption2: "se reunieron", 
     responseOption3: "se reunían",
     answer: "se han reunido",
   }, 
   {
       name: "stim10",
       question: "Conozco bien la ciudad y no me perderé. Ya ____________________ allí dos veces.", 
       responseOption1: "he ido", 
       responseOption2: "fui", 
     responseOption3: "iba",
     answer: "he ido",
   }, 
   {
       name: "stim11",
       question: "Tenéis mucha experiencia: ya __________________ tres maratones, y sabéis cómo preparar la carrera.", 
       responseOption1: "habéis corrido", 
       responseOption2: "corristeis", 
     responseOption3: "corríais",
     answer: "habéis corrido",
   }, 
   {
       name: "stim12",
       question: "Todo irá bien: María ya _____________________ la fiesta de Navidad en otras ocasiones y es muy eficaz en estas cosas.", 
       responseOption1: "ha organizado", 
       responseOption2: "organizó", 
     responseOption3: "organizaba",
     answer: "ha organizado",
   }, 
   {
       name: "stim13",
       question: "Los expertos de la empresa no están preocupados por la situación actual. ________________ muchos años aquí y saben lo que tienen que hacer.", 
       responseOption1: "han vivido", 
       responseOption2: "vivieron", 
     responseOption3: "vivían",
     answer: "han vivido",
   }, 
   {
       name: "stim14",
       question: "Estoy en crisis. ______________________ en esta oficina muchos años, pero ahora es el momento de cambiar de vida.", 
       responseOption1: "He trabajado", 
       responseOption2: "Trabajé", 
     responseOption3: "Trabajaba",
     answer: "He trabajado",
   }, 
   {
       name: "stim15",
       question: "Andrés está muy triste. Susana y él ____________________ juntos muchos años, pero ahora ella está enamorada de otro y quiere dejar a Andrés.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
     responseOption3: "salían",
     answer: "han salido",
   }, 
   {
       name: "stim16",
       question: "Siempre __________________ que la familia es muy importante en la vida de una persona. Estoy convencido de eso.", 
       responseOption1: "he pensado", 
       responseOption2: "pensé", 
     responseOption3: "pensaba",
     answer: "he pensado",
   }, 
   {
       name: "stim17",
       question: "Siempre _________________ partidario de la vida sana y la alimentación equilibrada: es lo mejor para tener buena salud.", 
       responseOption1: "he sido", 
       responseOption2: "fui", 
     responseOption3: "era",
     answer: "he sido",
   }, 
   {
       name: "stim18",
       question: "Alberto siempre ___________________ ideas conservadoras. Creo que, a sus años, no va a cambiar.", 
       responseOption1: "ha tenido",
       responseOption2: "tuve",
     responseOption3: "tenía",
     answer: "ha tenido",
   }, 
   {
       name: "stim19",
       question: "Este año, el Real Madrid ___________________ el campeonato de fútbol.", 
       responseOption1: "ha ganado", 
       responseOption2: "ganó", 
     responseOption3: "ganaba",      
     answer: "ha ganado",
   }, 
   {
       name: "stim20",
       question: "Este trimestre, Laura __________________ su tesis doctoral. ¡Está contentísima!", 
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
     responseOption3: "terminaba",
     answer: "ha terminado",
   }, 
   {
       name: "stim21",
       question: "Estos últimos meses, las cosas  _______________________ mejor en la empresa. Parece que la crisis ha pasado.", 
       responseOption1: "han ido", 
       responseOption2: "fueron", 
     responseOption3: "iban",
     answer: "han ido",
   }, 
   {
       name: "stim22",
       question: "Esta semana, Plácido Domingo ___________________ una ópera de Mozart en el Teatro Principal.", 
       responseOption1: "ha cantado", 
       responseOption2: "cantó", 
     responseOption3: "cantaba",
     answer: "ha cantado",
   }, 
   {
       name: "stim23",
       question: "Estas vacaciones ________________ a mi hermana, que normalmente vive en Chile. ¡Qué bien!", 
       responseOption1: "he visto", 
       responseOption2: "vi", 
     responseOption3: "veía",
     answer: "he visto",
   }, 
   {
       name: "stim24",
       question: "Este verano ___________________ un ascensor nuevo en mi edificio. Ahora van a cambiar la pintura.", 
       responseOption1: "han instalado", 
       responseOption2: "instalaron", 
     responseOption3: "instalaban",
     answer: "han instalado",
   }, 
   {
       name: "stim25",
       question: "María y Pedro ___________________ cuando yo llegué, pero finalmente cambiaron de idea y se quedaron conmigo.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
     responseOption3: "salían",
     answer: "han salido",
   },  
   {
       name: "stim26",
       question: "Rosa___________________ de escribir el informe, pero una llamada telefónica le interrumpió y no pudo hacerlo." ,
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
     responseOption3: "terminaba",
     answer: "salían",     
   }, 
   {
       name: "stim27",
       question: "El atleta _________________ el primero a la meta, pero en los últimos metros tuvo un problema y otro corredor le adelantó.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
     responseOption3: "llegaba",
     answer: "llegaba",
   }, 
   {
       name: "stim28",
       question: "Aquí ______________________ un edificio completamente nuevo, pero no lo terminaron por culpa de la crisis.", 
       responseOption1: "han construido", 
       responseOption2: "construyeron", 
     responseOption3: "construían",
     answer: "construían",
   }, 
   {
       name: "stim29",
       question: "En ese momento, en el Parlamento ___________________ al presidente, pero por un problema técnico invalidaron la votación. La próxima semana tienen que votar otra vez.", 
       responseOption1: "han elegido", 
       responseOption2: "eligieron", 
     responseOption3: "elegían",
     answer: "elegían",
   }, 
   {
       name: "stim30",
       question: "Juan ____________________ la cena en la cocina, pero tuvo que salir urgentemente y no pudo terminar.", 
       responseOption1: "ha preparado", 
       responseOption2: "preparó", 
     responseOption3: "preparaba",
       answer: "preparaba",    
   }, 
   {
       name: "stim31",
       question: "-A: ¿Y Julio? ¿Dónde está?   -B: No sé… Antes he hablado con él y me ha dicho que _________________ unas cervezas y ______________ enseguida para acá.", 
       responseOption1: "ha comprado / ha venido", 
       responseOption2: "compró / vino", 
     responseOption3: "compraba / venía",
       answer: "compraba / venía",     
   }, 
   {
       name: "stim32",
       question: "-A: ¿Qué tal está Pedro? -B: Muy ocupado, creo. Dijo que _______________ del permiso de conducir la semana que viene.",
       responseOption1: "se ha examinado", 
       responseOption2: "se examinó", 
     responseOption3: "se examinaba",
       answer: "se examinaba",     
   }, 
   {
       name: "stim33",
       question: "-A: ¿Se han ido ya Eugenia y Joaquín de vacaciones? -B: Aún no. Dijeron que __________________ para Roma el viernes que viene.", 
       responseOption1: "han salido", 
       responseOption2: "salieron", 
     responseOption3: "salían",
       answer: "salían",     
   }, 
   {
       name: "stim34",
       question: "-A: ¿Qué sabes de Cristina?  -B: No mucho. _________________ a Madrid el próximo fin de semana. Entonces podremos verla.", 
       responseOption1: "ha venido", 
       responseOption2: "vino", 
     responseOption3: "venía",
       answer: "venía",    
   }, 
   {
       name: "stim35",
       question: ". - A: ¿Quién ha ganado el partido? - B: Aún es pronto para saberlo. El partido _________________ a las 21.30. Faltan veinte minutos para el final.", 
       responseOption1: "ha terminado", 
       responseOption2: "terminó", 
     responseOption3: "terminaba",
     answer: "terminaba",
   }, 
   {
       name: "stim36",
       question: "–A: ¿Ya ha llegado el tren?  -B: Creo que no. ________________ a las 20.10, y ahora son las 19.55.", 
       responseOption1: "Ha llegado", 
       responseOption2: "Llegó", 
     responseOption3: "Llegaba",
       answer:"llegaba",     
   }, 
   {
       name: "stim37",
       question: "Ayer me quedé en casa y ____________________ viendo la televisión durante un par de horas.", 
       responseOption1: "he estado", 
       responseOption2: "estuve", 
     responseOption3: "estaba",
     answer:  "estuve",
   }, 
   {
       name: "stim38",
       question: "El sábado salió a dar un paseo y __________________ mirando tiendas toda la mañana.", 
       responseOption1: "ha estado", 
       responseOption2: "estuvo", 
     responseOption3: "estaba",
     answer: "estuvo",
   }, 
   {
       name: "stim39",
       question: "En la reunión del miércoles _________________ discutiendo ese tema, y finalmente tomaron una decisión.", 
       responseOption1: "han estado", 
       responseOption2: "estuvieron", 
     responseOption3: "estaban",
     answer: "estuvieron",
   }, 
   {
       name: "stim40",
       question: "Pasaron un día muy agradable en el pueblo: por la mañana ___________________ arreglando la casa, pero después de comerdieron un paseo y vieron cosas muy bonitas.", 
       responseOption1: "han estado", 
       responseOption2: "estuvieron", 
     responseOption3: "estaban",
     answer: "estuvieron",
   }, 
   {
       name: "stim41",
       question: "No me gustó el comportamiento de Ramón: durante toda la fiesta _______________ bebiendo sin parar, sentado en una silla, solo y sin hablar con nadie. No le invitaré nunca más.", 
       responseOption1: "ha estado", 
       responseOption2: "estuvo", 
     responseOption3: "estaba",
     answer: "estuvo",
   }, 
   {
       name: "stim42",
       question: "-A: ¡Quién ___________ ir con ellos a esquiar! –B: Pues si no vas es porque no quieres.", 
       responseOption1: "pudiera", 
       responseOption2: "pueda", 
     responseOption3: "podrá",
     answer: "pudiera",
   }, 
   {
       name: "stim43",
       question: "-A: Te revisaré el documento siempre que me lo __________ antes del martes  –B: Vale, yo te lo envío.", 
       responseOption1: "des", 
       responseOption2: "dieras", 
     responseOption3: "das",
     answer: "des",
   }, 
    {
       name: "stim44",
       question: "-A: Cuando __________________, tienes que hacer los deberes. -B: Vale, mamá.", 
       responseOption1: "vendrás", 
       responseOption2: "vienes", 
     responseOption3: "vengas",
     answer: "vengas",
   }, 
   {
       name: "stim45",
       question: "Julián ________________ trabajando en esa empresa unos años, pero al final decidió irse.", 
       responseOption1: "ha estado", 
       responseOption2: "estuvo", 
     responseOption3: "estaba",
     answer: "estuvo",
   }, 
   {
       name: "stim46",
       question: "-A: ¿Has leído la noticia? –B:  Sí, me enteré antes de que la__________________.", 
       responseOption1: "publicaron", 
       responseOption2: "publicaran", 
     responseOption3: "publiquen",
     answer: "publicaran",
   }, 
   {
       name: "stim47",
       question: "-A: Es mejor que no le _______________. –B: ¿Tan enfadado está?", 
       responseOption1: "molestarás", 
       responseOption2: "molestarías", 
     responseOption3: "molestes",
     answer: "molestes",
   }, 
   {
       name: "stim48",
       question: "–A: ¡Date prisa, que no quiero llegar tarde el primer día!  –B: No te_______________, que ya estoy preparado.", 
       responseOption1: "preocuparás", 
       responseOption2: "preocupas", 
     responseOption3: "preocupes",
     answer: "preocupes",
   }, 
   {
       name: "stim49",
       question: ". –A: Con el frío que ____________, ¿no llevas abrigo?  -B:  No. Es que no me gusta abrigarme.", 
       responseOption1: "hace", 
       responseOption2: "hacía", 
     responseOption3: "hiciera",
     answer: "hace",
   }, 
   {
       name: "stim50",
       question: "–A: ¿Qué vas a hacer esta noche?  –B:  No sé, pero quizás _____________ en casa.", 
       responseOption1: "me quedaba", 
       responseOption2: "me quede", 
     responseOption3: "me quedara",
     answer: "me quede",
   }, 
];


//Vars for the timer of each question.
var timer = 0;
var timings = [];
var interval = 0;
var correct = true;
var userInput = 0;
var questions = [];


//Function to shuffle the array before picking the questions.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffleArray(stimuli);


function begin() {
  document.getElementById('stage').style.display = "block";
	document.getElementById('instructions').style.display = "none";
	document.getElementById('legal').style.display = "none";
  next();
}

function start() {
  userInputGender = $('input[name="gender"]:checked').val();
  userInputAge = $('input[name="edad"]:checked').val();
  userInputLanguage = $('input[name="lengua o lenguas maternas"]:text').val();
  userInputOtherLang = $('input[name="otras lenguas y nivel"]:text').val();
  userInputInstitute = $('input[name="curso en el Instituto Cervantes"]:text').val();
  userInputLearn = [];
  if (document.getElementById('01').checked&&document.getElementById('02').checked) {
    userInputLearn = "Cursos en su país y Cursos países hispanos: " + $('input[id="text01"]:text').val();
  } else if (document.getElementById('01').checked) {
    userInputLearn = ("Cursos en su país");
  } else if (document.getElementById('02').checked) {
    userInputLearn = "Cursos países hispanos: " + $('input[id="text01"]:text').val();
  } else if (document.getElementById('03').checked) {
    userInputLearn = "Viajes cortos a países hispanos: " + $('input[id="text02"]:text').val();
  } else if (document.getElementById('04').checked) {
    userInputLearn = "Ha vivido en países hispanos: " + $('input[id="text03"]:text').val();
  }
  if (userInputGender == "hombre"||userInputGender == "mujer"&&userInputAge == "menos de 30 años"||userInputAge == "entre 30 y 60 años"||userInputAge == "mayor de 60"&&$('#userInputLanguage').val() !== ''&&$('#userInputOtherLang').val() !== ''&&$('#userInputLearn').val() !== ''&&userInputLearn !== undefined) {
    questions = "Sexo: " + userInputGender + ",     Edad: " + userInputAge + ",     LenguaMaterna: " + userInputLanguage + ",     LenguaSecundaria: " + userInputOtherLang + ",     InstitutoCervantes: " + userInputInstitute + ",     DondeAprendió: " + userInputLearn;
    document.getElementById('intro').style.display = "none";
    lgSubmit();
  } else {
    alert("Por favor, responda a todas las preguntas en el formulario");
  }
}

function timerFix() {
  userInputNum = $('input[name="option"]:checked').val();
  if (userInputNum == 1) {
    userInput = stimulus.responseOption1;
  } else if (userInputNum == 2) {
    userInput = stimulus.responseOption2;
  } else if (userInputNum == 3) {
    userInput = stimulus.responseOption3;
  } else {
    alert("Por favor, seleccione una opción para continuar");
  }

  if (userInput == stimulus.answer) {
    correct = true;
  } else {
    correct = false;
  }

  if (userInputNum == 1||userInputNum == 2||userInputNum == 3) {
    timings.push('{Time: "' + timer + '",      Question: "' + stimulus.name + '",      Answer: "' + userInput + '",      Correct: "' + correct + '"}\n');
    timer=0;
    clearInterval(interval);
    next();
  }
	
}

function next(){
	if (stimuli.length === 0) {
		document.getElementById('stage').style.display = "none";
    document.getElementById('intro').style.display = "block";
	} else {
	document.getElementById('qnumber').innerHTML = qnumber;
	qnumber++;
	var a = $('input[name="a"]:checked').val();
	var b = $('input[name="b"]:checked').val();
	var c = $('input[name="c"]:checked').val();
	stimulus = stimuli.shift();
	document.getElementById('question').innerHTML = stimulus.question;
	document.getElementById('a').innerHTML = '<td><input class="opciona" name="option" type="radio" id="a" value="1" /></td>' + stimulus.responseOption1;
	document.getElementById('b').innerHTML = '<td><input class="opciona" name="option" type="radio" id="b" value="2" /></td>' + stimulus.responseOption2;
	document.getElementById('c').innerHTML = '<td><input class="opciona" name="option" type="radio" id="c" value="3" /></td>' + stimulus.responseOption3;
	interval=window.setInterval(function() {
		timer++;
		}, 1000);
	}

}


function lgSubmit() {
	document.getElementById('finished').style.display = "block";
  var times = timings.join();
  $.ajax({  
     url: '/submit.php', 
     type: "POST",
     data: {q: questions, t: times}, //Pass the var to php?
     success: function(data){
         console.log(data);
     }}); 
    //window.open("http://linguinvestigate.org/submit.php","_self");
    $.get("submit.php");
   return Math.PI;

}