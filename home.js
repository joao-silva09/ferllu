const URLDESTAQUE="https://wd101ugt.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D%22destaques%22%5D%7B%0A++titulo%2C%0A++++descricao%2C%0A++++%22imagem%22%3A+imagem.asset-%3Eurl%0A%7D"

window.addEventListener("load",async function(){
    const resultado= await fetch(URLDESTAQUE,{
        method:"GET",
    });
    const json = await resultado.json();
 console.log(json)
    const secao=document.querySelector("div.secao2");
    for (let index = 0; index < json.result.length; index++) {
        const element = json.result[index];

        const imagem = document.createElement("img");
        imagem.classList.add("img-destaques");
        imagem.setAttribute("src", element.imagem);

        const botao1 = document.createElement("button");
        botao1.classList.add("botao-destaques");
        botao1.append(imagem);

        const titulo = document.createElement("h1");
        titulo.classList.add("titulo");
        titulo.textContent=element.titulo;

        const descricao = document.createElement("p");
        descricao.textContent=element.descricao;

        const botao2 = document.createElement("button");
        botao2.classList.add("veja-mais");
        botao2.textContent="Veja Mais";

        const destaque=document.createElement("div");
        destaque.classList.add("destaques");
        destaque.append(botao1,titulo,descricao,botao2);

        secao.append(destaque);
        
    }
});
    /*
    for(let i=0;i<dest.length;i++){
        const imagem = document.createElement("img");
        imagem.classList.add("img-destaques");
        imagem.setAttribute("src", dest[i].imagem);

        const botao1 = document.createElement("button");
        botao1.classList.add("botao-destaques");
        botao1.append(imagem);

        const titulo = document.createElement("h1");
        titulo.classList.add("titulo");
        titulo.textContent=dest[i].titulo;

        const descricao = document.createElement("p");
        descricao.textContent=dest[i].descricao;

        const botao2 = document.createElement("button");
        botao2.classList.add("veja-mais");
        botao2.textContent="Veja Mais";

        const destaque=document.createElement("div");
        destaque.classList.add("destaques");
        destaque.append(botao1,titulo,descricao,botao2);

        const secao=document.querySelector("div.secao2")
        secao.append(destaque);

    }
    */
