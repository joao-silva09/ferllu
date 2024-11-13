const URL = "https://rdm2alro.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22produto%22%5D%7B%0A++titulo_prod%2C%0A++%22imagem_produto%22%3A+imagem_produto.asset-%3Eurl%0A%7D";

window.addEventListener("load", async function () {
    const resultado = await fetch (URL, {
        method: "GET",

    });

    const json = await resultado.json();
    const destino = document.querySelector("div.recentes-container");

    console.log(json);
    
    for (let index = 0; index < json.result.length; index++) {
        const element = json.result[index];

        const imagem  = document.createElement("img");
        imagem.classList.add("img-recentes");
        imagem.setAttribute("src" , element.imagem_produto);

            console.log(imagem);

        const botao = document.createElement("button");
        botao.classList.add("botao-recentes");
        botao.append(imagem);
        
        console.log(botao);

        const h1 = document.createElement("h1");
        h1.classList.add("titulo");
        h1.textContent = element.titulo_prod;

        console.log(h1);

        const div = document.createElement("div");
        div.classList.add("recentes");
        div.append(botao,h1);

        console.log(div);

        destino.append(div);
        

        
        
    }

});
