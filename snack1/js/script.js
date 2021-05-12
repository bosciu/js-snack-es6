/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */


let bicicletteDaCorsa = [{
        nome: "Bici da città",
        peso: 15
    },
    {
        nome: "Mountain bike",
        peso: 16
    },
    {
        nome: "Bici da corsa",
        peso: 12
    },
    {
        nome: "Bici da cicloturismo",
        peso: 11
    },
    {
        nome: "Bici ibrida",
        peso: 19
    },

];

const root = document.getElementById("root");
const button = document.getElementsByClassName("btn")[0];
const [primaBici] = bicicletteDaCorsa;
const { peso } = primaBici
let pesoMin = peso;
let biciLeggera = {};

for (let i = 0; i < bicicletteDaCorsa.length; i++) {
    const { peso } = bicicletteDaCorsa[i];
    if (peso < pesoMin) {
        pesoMin = peso;
        biciLeggera = bicicletteDaCorsa[i];
    }
}

button.addEventListener("click", () => root.innerHTML = `
<ul>
    <li>
        <h2>Nome della biciletta: ${biciLeggera.nome}</h2>
    </li>
    <li>
        <h3>Peso della biciletta: ${pesoMin}</h3>
    </li>
</ul>`);