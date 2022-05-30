function LerDados () {

    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados){
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = {Clientes : [{Nome: "Victoria Oliveira", Email: "victoriaoliveira12@gmail.com", Endereço: "Rua Bom Sucesso 163", Ocupação:"Enfermeira"},
         {Nome: "Luisa Lopes", Email: "lopesluisa27@gmail.com", Endereço: "Avenida Marcos Freitas 722", Ocupação:"Advogada"},
         {Nome: "Lucas Sarquis", Email: "sarquislucas77@gmail.com", Endereço: "Rua Bom Sucesso 163", Ocupação:"Estudante"}
             ]
        }
    }

    return objDados;

}

function SalvarDados (dados) {

    localStorage.setItem ('db', JSON.stringify (dados));

}

function InserirCliente () {

    // Ler os dados do LocalStorage

    let objDados = LerDados();

    // Incluir novo Cliente

    let strNome = document.getElementById ('CampoNome').value;
    let strEmail = document.getElementById ('CampoEmail').value;
    let strEndereço = document.getElementById ('CampoEndereco').value;
    let strOcupação = document.getElementById ('CampoOcupacao').value;

    let novoCliente = {

        Nome: strNome,
        Email: strEmail,
        Endereço: strEndereço,
        Ocupação: strOcupação
    }

    objDados.Clientes.push (novoCliente);

    // Salvar os dados no LocalStorage

    SalvarDados (objDados);

    // Atualiza os Dados da Tela

    ImprimirDados ();

}

function AlterarCliente () {

    alert ("FUNÇÃO NÃO IMPLEMENTADA");

    }

    
function ExcluirCliente () {


    alert ("FUNÇÃO NÃO IMPLEMENTADA");

    }

function PesquisarCliente () {

    alert ("FUNÇÃO NÃO IMPLEMENTADA");
        
    }

    function LimparDados () {

        localStorage.clear();
    
    // Atualiza os Dados da Tela
    ImprimirDados ();
 
    }

function ImprimirDados () {

    let tela = document.getElementById('tela');
    let strhtml = '';
    let objDados = LerDados ();

    for (i=0; i < objDados.Clientes.length; i++) {
        strhtml += `<p> ${objDados.Clientes[i].Nome} - ${objDados.Clientes[i].Email} - ${objDados.Clientes[i].Endereço} - ${objDados.Clientes[i].Ocupação} </p>`
    }

    tela.innerHTML = strhtml;
}

//Botoes

document.getElementById('btnCarregar').addEventListener('click', ImprimirDados);

document.getElementById('btnInserirCliente').addEventListener('click', InserirCliente);

document.getElementById('btnAlterarCliente').addEventListener('click', AlterarCliente);

document.getElementById('btnExcluirCliente').addEventListener('click', ExcluirCliente);

document.getElementById('btnPesquisarCliente').addEventListener('click', PesquisarCliente);

document.getElementById('btnLimpar').addEventListener('click', LimparDados);

