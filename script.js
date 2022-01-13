document.getElementById("enviar").addEventListener("Click", validaformulario)

function validaformulario(){if(document.getElementById("nome-usuaria").value != "" && document.getElementById("email-usuaria").value != ""){
  alert("Pronto! você receberá as novidades por e-mail")
}else{
alert("Por favor preencha todos os campos")

}

