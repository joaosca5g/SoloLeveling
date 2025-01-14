function pesquisar(){
    
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("pesquisa").value;
    
    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

for (let dado of dados){ 
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))  {
        
    
    // Cria um novo elemento
    resultados += `
    <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" style="text-decoration: none;">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p><br>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
    `;
}
}

section.innerHTML = resultados;
    
}

//console.log(dados);
// para cada dado e etc.. em inglês para programar


    