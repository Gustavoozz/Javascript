function nomeNovo() {
    event.preventDefault() // Captura o submit do form.

    let nome = document.getElementById('nome1').value
    let user = document.getElementById('user1').value
        
    document.getElementById('changes').innerText = `Olá, ${user.replace(nome)}` 
    }