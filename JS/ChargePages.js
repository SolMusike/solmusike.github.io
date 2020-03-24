function CallHome() {
	document.getElementById("content").innerHTML='<object type="text/html" data="home.html"></object>';
}

function CallContent(valor) {
	switch(valor) {
		case "1": document.getElementById("content").innerHTML='<object type="text/html" data="sobre.html"></object>';
			break;
		case "2": document.getElementById("content").innerHTML='<object type="text/html" data="loja.html"></object>';
			break;
		case "3": document.getElementById("content").innerHTML='<object type="text/html" data="contato.html"></object>';
			break;
		default: alert("Erro ao redirecionar a página! Por favor, avise o administrador");
	}
}