//const nome = "Ruan Figueiredo";
//let nome2 = "cassio"
// let pessoa = {
//     nome: "joão",
//     profissao: "pedreiro",
//     idade: 33

// }

let nomes = ["marcelo", "ruan", "caio"]

let pessoas = [
    {
        nome: "joão",
        profissao: "pedreiro",
        idade: "33"  
    },
    {
        nome: "eduarda",
        profissao: "camareira",
        idade: "55" 
    }
]

console.log(pessoas)

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

adicionarPessoa({

    nome: "pedro",
    trabalho: "assistente adm.",
    idade: "55"
});


console.log(pessoas);

function imprimirPessoa(){
    pessoas.forEach((item)=>{
        console.log("nome:")
        console.log(item.nome)

        console.log("trabalho:")
        console.log(item.trabalho)

        console.log("idade:")
        console.log(item.idade)

        
    })

    function imprimirPessoa();
}



console.log(nomes[2]);
//console.log("valor inicial")
//console.log(nome2)

//nome2 = "joão"

// function alterarNome(){
//     nome2 = "jubia";
//     console.log("valor alterado");
//     console.log(nome2);
// }

// function recebeEalteraNome(novoNome){
//     nome2 = novoNome;
//     console.log("valor alterado, com novo nome");
//     console.log(nome2);

// }


// function imprimirPessoa(pessoa){
//     console.log("nome");
//     console.log("profissao");
//     console.log ("idade")

// }

// imprimirPessoa(pessoa);

// imprimirPessoa({
//     nome: 'carlos',
//     idade: '55'
// })

//alterarNome();
//recebeEalteraNome('joãozinho Pereira');
//recebeEalteraNome('zagallo');


