//Importando o catalogo de filmes em json
const catalogo = require('./database/catalogo.json');

//Função que adiciona novo filme
function adicionarFilme(catalogo,codigo,titulo,duracao,atores,anoDeLancamento,emCartaz){

    console.log("******** Catálogo atual ************");
    console.log("");
    
    for(i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].titulo + " | " + catalogo[i].anoDeLancamento);
    }

    let filme = {
        codigo:codigo,
        titulo:titulo,
        duracao:duracao,
        atores:atores,
        anoDeLancamento:anoDeLancamento,
        emCartaz:emCartaz,
    }

    catalogo.push(filme); 
    
    console.log("");
    console.log("******** Catálogo atualizado ************");
    console.log("");

    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].titulo + " | " + catalogo[i].anoDeLancamento);
    }  
    
    console.log("");
}

//Função que pesquisa por um filme
function buscarFilmes(catalogo,codigoDoFilme) {

    let arrayFilmeEncontrado = "";

    for(let i = 0; i < catalogo.length; i++) {        

        if(catalogo[i].codigo == codigoDoFilme){ 
            arrayFilmeEncontrado = catalogo[i];            
            return arrayFilmeEncontrado;
        } 
    }    
}

//Função que altera a propriedade "emCartaz"
function alterarStatusEmCartaz (catalogo,codigoDoFilme,buscarFilmes) {

    let filmeEncontrado = buscarFilmes (catalogo,codigoDoFilme);

    if(filmeEncontrado != null){
        //if ternário
        filmeEncontrado.emCartaz == true ? filmeEncontrado.emCartaz = false : filmeEncontrado.emCartaz = true;
        return filmeEncontrado;
    }  

}

//Função que lista todos os filmes
function listarTodosOsFilmes (catalago) {

    console.log();
    console.log("***** Lista Completa dos Filmes *****");
    console.log();

    catalago.forEach(function (valor){
        console.log(valor.titulo);
    });

    console.log();
}

//Função que lista os filmes em cartaz
function listarFilmesEmCartaz (catalago) {

    console.log();
    console.log("***** Filmes em Cartaz *****");
    console.log();

    for(let i = 0; i < catalago.length; i++){
        catalogo[i].emCartaz == true ? console.log(catalago[i].titulo) : " ";        
    }
}


//Função que retorna filmes com mais de 2 hooras
function listarFilmesDeLongaDuracao(catalago) {

    console.log();
    console.log("***** Filmes de Longa Duração *****");
    console.log();

    catalago.forEach(function (valor){
        if(valor.duracao > 120){
            console.log(valor.titulo + " - " + valor.duracao + " min");
        }        
    });

    console.log();
}


//Declaração de variáveis
let cinema = "Cine Hause";

//Variáveis para adicionar novo filme
let codigo = 3;
let titulo = "Mulher-Maravilha";
let duracao = 141;
let atores = ["Gal Gadot","Chris Pine","Connie Nielsen"];
let anoDeLancamento = 2017; 
let emCartaz = false;

//Variável para acesar/pesquisar um filme
let codigoDoFilme = 3;


//Excutando a função adicionarfilme
adicionarFilme(catalogo,codigo,titulo,duracao,atores,anoDeLancamento,emCartaz);


//Excutando a função buscarFilmes
let resultadoBuscarFilmes = buscarFilmes(catalogo,codigoDoFilme);
if(resultadoBuscarFilmes != null){
    console.log("");
    console.log("******** Resultado da pesquisa do Filme ************");
    console.log("");
    console.log("Codigo do Filme: " + resultadoBuscarFilmes.codigo);
    console.log("Nome: " + resultadoBuscarFilmes.titulo);
    console.log("Duração em min: " + resultadoBuscarFilmes.duracao);
    console.log("Atores: " + resultadoBuscarFilmes.atores);
    console.log("Ano do lançamento: " + resultadoBuscarFilmes.anoDeLancamento);
    console.log("Em cartaz: " + resultadoBuscarFilmes.emCartaz);
    console.log("");
} else {           
    console.log("");
    console.log("******** Nenhum filme encontrado na pesquisa! ************");
    console.log("");    
}



//Excutando a função alterarStatusEmCartaz  
let resultadoAlterarStatusEmCartaz = alterarStatusEmCartaz(catalogo,codigoDoFilme,buscarFilmes);
if(resultadoAlterarStatusEmCartaz != null){                   
    console.log("");
    console.log("****** STATUS da propriedade (emCartaz) foi atualizado ******");
    console.log("");            
    console.log(resultadoAlterarStatusEmCartaz.titulo);           
    console.log("Em cartaz: " + resultadoAlterarStatusEmCartaz.emCartaz);
    console.log("");
} else {
    console.log("");
    console.log("******** Nenhum filme foi alterado! Insira um código existente! ************");
    console.log("");  
}


//Executando a função listarTodosOsFilmes
listarTodosOsFilmes (catalogo);


//Executando a função listarfilmesEmCartaz
listarFilmesEmCartaz (catalogo);


//Executando a função listarFilmesDeLongaDuracao
listarFilmesDeLongaDuracao (catalogo);
