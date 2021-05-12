/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const getRandomNumber = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

let squadreDiCalcio = [{
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Crotone",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Parma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spezia",
        puntiFatti: 0,
        falliSubiti: 0
    }
];
let nuovoArray = [];

for (let i = 0; i < squadreDiCalcio.length; i++) {
    squadreDiCalcio[i].puntiFatti = getRandomNumber();
    squadreDiCalcio[i].falliSubiti = getRandomNumber();
    let { nome, falliSubiti } = squadreDiCalcio[i];
    nuovoArray.push({ nome, falliSubiti });
}
console.log(nuovoArray);