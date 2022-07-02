function logar()
{
    var login = document.getElementById('email_login').value;
    var senha = document.getElementById('senha_login').value;

    if(login == "admin" && senha == "admin")
    {
        alert('Login efetuado com sucesso"');
        location.href = "homepage.html";
    }
    else
    {
        alert('Usuário ou senha incorretos');
    }

    
}

function cadastro()
{
    var cadnome = document.getElementById('nome_cad').value;
    var cadmail = document.getElementById('email_cad').value;
    var cadsenha = document.getElementById('senha_cad').value;
    
    alert('Usuário cadastrado com sucesso!');
    location.href = "homepage.html";
}