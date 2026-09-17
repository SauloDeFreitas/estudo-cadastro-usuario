const url = 'http://127.0.0.1:3000/'

function cadastrarUsuário(){
    const email = document.getElementById('emailUsuarioCadastro').value
    const senha =  document.getElementById('senhaUsuarioCadastro').value
    const senhaRedigitada = document.getElementById('senhaUsuarioRedigitadaCadastro').value


    const usuario = {
        email : email,
        senha : senha,
        senhaRedigitada : senhaRedigitada
    }

    console.log(url + 'cadastrar')

    fetch(url + 'cadastrar', {
        method : "POST",
        body: JSON.stringify (usuario)
    })
}