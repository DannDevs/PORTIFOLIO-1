const frases = ["</> Front End & Back End and App Developer </>"];
let i = 0;
let timer;

function typingEffect() {
	let frase = frases[i].split("");
	var loopTyping = function() {
		if (frase.length > 0) {
			document.getElementById('text').innerHTML += frase.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let frase = frases[i].split("");
	var loopDeleting = function() {
		if (frase.length > 0) {
			frase.pop();
			document.getElementById('text').innerHTML = frase.join("");
		} else {
			if (frase.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();





var cel = document.querySelector("#ctext2");
var ctext = " </> Linguaguens / Softwares </> "
var cinterval = 250;
function cshowtext(cel, ctext, cinterval) {
  var cchar = ctext.split("").reverse();
  
  var ctyper = setInterval(function() {
  
    if (!cchar.length) {
        return clearInterval(ctyper)
    }
    
    var next = cchar.pop();
    
    cel.innerHTML += next;

    
  }, cinterval);
  
}
cshowtext(cel, ctext, cinterval );



function validarFormulario() {
	var nome = document.getElementById('fnome').value;
	var email = document.getElementById('femail').value;
	var telefone = document.getElementById('ftel').value;
	var assunto = document.getElementById('fassunto').value;
	
	
	var telefone = document.getElementById('ftel').value=telefone;
	// Expressões regulares para validação
	var nomeRegex = /^[A-Za-z\s]+$/;
	var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	var telefoneRegex = /^\d{0,16}$/; 
	var assuntoRegex = /^.{10,}$/; 

	if (!nomeRegex.test(nome)) {
		alert('Nome inválido. Insira apenas letras e espaços.');
		return false;
	}

	if (!emailRegex.test(email)) {
		alert('Email inválido. Insira um endereço de email válido.');
		return false;
	}

	if (!telefoneRegex.test(telefone)) {
		alert('Telefone inválido. Insira entre 10 e 15 dígitos numéricos.');
		return false;
	}

	telefone=telefone.slice(0,16)
	telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
	document.getElementById('ftel').value = telefone;

	if (!assuntoRegex.test(assunto)) {
		alert('Assunto inválido. Insira pelo menos 10 caracteres.');
		return false;
	}
	
	const dadosExibidos = document.getElementById("dadosExibidos");
            dadosExibidos.innerHTML = `Nome: ${nome}<br>E-mail: ${email}<br>Telefone: ${telefone}<br>assunto: ${assunto}`;

            // Evita que o formulário seja enviado
            event.preventDefault();

	alert('Obrigado por enviar')

	return true;
}

//revel scrool - SR.REVEL TAG 
window.sr = ScrollReveal({ reset:true });

sr.reveal('#corpo',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  });
sr.reveal('#slided',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  });
sr.reveal('#corpo2',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  } );
sr.reveal('#caixas',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  } );
sr.reveal('#works',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  });
sr.reveal('#worksc',{duration:2000, rotate:{ x: 2, y : 100 , z:0 }  });










