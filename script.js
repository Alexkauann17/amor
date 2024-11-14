function finalizar() { 
    var nome = document.getElementById('nome')
    var senha = document.getElementById('senha')
    var fina = document.getElementById('finalizar')
    var se = String(senha.value)
    if (nome.value == `moletom cinza` && se == "0308") {
        window.open('../home/index.html','_blank')

    } else {
        window.alert('[ERRO] SENHA OU USUARIO INVALIDA')
    }
}



//if (nome.value == `Emily` && senha.value == 3006)