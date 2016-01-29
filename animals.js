var stimuli = shuffle([
   stim1: {
       name: "stim1",
       question: "Tengo noticias de Juana: ya ______________ a su nuevo destino. Ahora busca casa.", 
       responseOption1: "ha llegado", 
       responseOption2: "llegó", 
       responseOption3: "llegaba",
   },    
   stim2: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
   }, 
   stim3: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
   }, 
   stim4: {
       name: "stim4",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim5: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim6: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim7: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim8: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim9: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim10: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim11: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim12: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   }, 
   stim13: {
       name: "stim2",
       question: "Por fin tengo tiempo: ya _______________ el resumen de la reunión. ¿Vamos a tomar un café?", 
       responseOption1: "he terminado", 
       responseOption2: "terminé", 
	   responseOption3: "terminaba",
       ...
   },
]);

var myAnimals = shuffle(animals);
var myProperties = shuffle(properties); 
var myModals = [];
var myArgtypes = [];

$(document).ready(function() {
    while (myModals.length < myProperties.length) {
	myModals = myModals.concat(shuffle(modals));
    }
    while (myArgtypes.length < myProperties.length) {
	myArgtypes = myArgtypes.concat(shuffle(argtypes));
    }
    $(".numberofquestions").html(myProperties.length);
    $("#qtotal").html(myProperties.length);
    showSlide("instructions");
    $("#mustaccept").hide();
});

var experiment = {
    data: {},
    intro: function () {
	if (turk.previewMode) {
	    $("#instructions #mustaccept").show();
	} else {
	    showSlide("intro");
	}
    },
    next: function (qnum) {
	if (myProperties.length == 0) {
	    showSlide("language");
	    $("#lgerror").hide();
	    $("#lgsubmit").click(function(){
		lang = $("#lgform").serialize();
		if (lang.length > 5) {
		    lang = lang.slice(3,lang.length);
		    experiment.data["language"] = lang;
		    showSlide("finished");
		    setTimeout(function() {turk.submit(experiment.data)}, 1000);
		}
	    });	
	} else {
	    var argtype = myArgtypes.shift();
	    var modal = myModals.shift();
	    var inclusionArgument = (argtype == "inclusion");
	    var identityArgument = (argtype == "identity");
	    var trivialArgument = (identityArgument || inclusionArgument);
	    var property = myProperties.shift();
	    $("#question").html(stimulus.question);
	    showSlide("stage");
	    startTime = (new Date()).getTime();
	    if (trivialArgument && myAnimals.length < 1) {
		myAnimals = shuffle(animals);
	    } else if (myAnimals.length < 2) {
		myAnimals = shuffle(animals);
	    }
	    if (trivialArgument) {
		var trivialPremise = [1,2].random();
		if (trivialPremise == 1) {
		    if (identityArgument) {
			var p1animal = "horses";
		    } else {
			var p1animal = ["mammals", "animals"].random();
		    }
		    var p2animal = myAnimals.shift();
		} else {		    
		    if (identityArgument) {
			var p2animal = "horses";
		    } else {
			var p2animal = ["mammals", "animals"].random();
		    }
		    var p1animal = myAnimals.shift();
		} 
	    } else {
		var p1animal = myAnimals.shift();
		var p2animal = myAnimals.shift();
	    }  
	    var para = {
		trivialArgument: trivialArgument,
		argtype: argtype,
		qnumber: qnum,
		modal: modal,
		workerid: "workerid",
		assignmentid: "assignmentid"
	    };
	    para[p1animal] = 1;
	    para[p2animal] = 1;
	    var p1 = capitalize(p1animal) + " " + property + ".";
	    var p2 = capitalize(p2animal) + " " + property + ".";
	    if (modal == "none") {
		var c = "So, horses " + property + ".";
	    } else {
		var c = "So, it is " + modal + " that horses " + property + ".";
	    }
	    $(".pr").show();
	    $("#p1").html(p1);
	    $("#p2").html(p2);
	    $("#c").html(c);
	    $("#continue").show();
	    $("#confidence").show();
	    $(".agreement").prop('checked', false);
	    $(".rating").prop('checked', false);
	    $(".error").hide();
	    $(".continue").click(function() {
		var response = $("#fcform").serialize();
		if (response.length < 21) {
		    $("#confidence #error").show();
		} else {
		    $(".continue").unbind("click");
		    endTime = (new Date()).getTime(); 
		    para.rt = endTime - startTime;
		    var qparsed = response.split("&");
		    var qagreement = qparsed[0].split("=");
		    para.response = qagreement[1];
		    var qrating = qparsed[1].split("=");
		    para.confidence = qrating[1];  
		    qname = "q" + (qnum + 1);
		    experiment.data[qname] = para;
		    experiment.next(qnum + 1);
		}
	    });
	}
    }
}

Array.prototype.random = function() { return this[random(this.length)]; }
Array.prototype.cloneArray = function() { return this.slice(0);}
function showSlide(id) {$(".slide").hide();$("#"+id).show();}
function shuffle(v) { newarray = v.slice(0);for(var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);return newarray;} // non-destructive.
function random(a,b) {if (typeof b == "undefined") {a = a || 2;return Math.floor(Math.random()*a);} else {return Math.floor(Math.random()*(b-a+1)) + a;}}
function min(a,b) {if (a < b) {return(a);} else {return(b);}}
function capitalize(string) {var firstLetter = string.substring(0,1); firstLetter = firstLetter.toUpperCase(); var rest = string.substring(1,string.length); return firstLetter.concat(rest);}