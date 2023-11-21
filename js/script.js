
let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

 function calcular() {

    console.log("calculando..");
    // Carne 400g por pessoa + de 6 horas - 650g;
    // Cerveja 1200ml por pessoa + 6 horas - 2000ml; 
    // Refrigerante/agua 1000ml por pessoa + 6 horas - 1500ml;

   let adultos = inputAdultos.value;
   let criancas = inputCriancas.value;
   let duracao = inputDuracao.value;
   
   let qteTotaldeCarne = carnePP() * adultos + (carnePP()/2 * criancas);
   let qteTotaldeCerveja = cervejaPP(duracao) * adultos;
   let qteTotaldeBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao)/2 * criancas);
  
   resultado.innerHTML = `<p>${qteTotaldeCarne / 1000} Kg de carne.</p>`
   resultado.innerHTML += `<p>${Math.ceil(qteTotaldeCerveja / 335)} Latas de cerveja.</p>`
   resultado.innerHTML += `<p>${Math.ceil(qteTotaldeBebidas / 2000)} Pet's 2L de bebidas.</p>`


   function carnePP() {
      if(duracao >= 6) {
         return 650;
      } else {
         return 400;
      }
   }

   function cervejaPP() {
      if(duracao >= 6) {
         return 2000;
      } else {
         return 1200;
      }
   }

   function BebidasPP() {
      if(duracao >= 6) {
         return 1500;
      } else {
         return 1000;
      }
   }



 }

