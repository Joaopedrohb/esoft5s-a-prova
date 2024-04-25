async function getEstados() {
    try {
        let data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        
        let jsonData = await data.json()

        jsonData.forEach(estado => {
            criarLista(estado.nome, estado.sigla)
        });
    } catch (error) {
        console.error(error);
    }
}

function criarLista(nome, UF) {
    const li = document.createElement('li')
    
    const a = document.createElement('a')
    a.textContent = `${nome}`
    a.href = `./municipios/index.html?UF=${UF}`  

    li.appendChild(a)

    const main = document.querySelector('main ul')

    main.appendChild(li)
}

document.addEventListener('DOMContentLoaded', function () {
    getEstados()
  })