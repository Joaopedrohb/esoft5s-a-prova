const urlSearchParams = new URLSearchParams(location.search)
const uf = urlSearchParams.get('UF')
const header = document.querySelector('header')

function titulo() {
    console.log(uf);
    const h1 = document.createElement('h1')
    h1.innerHTML = `Municipios de ${uf}`;
    header.appendChild(h1)
}

document.addEventListener('DOMContentLoaded', function () {
    titulo()
  })