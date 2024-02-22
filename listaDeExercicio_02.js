/* 
    2) O IMC (Indice de Massa Corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 = abaixo do peso;
    - Entre 18.5 e 25 = peso normal; 
    - Entre 25 e 30 = acima do peso; 
    - Entre 30 e 40 = obeso;
    - Acima de 40 = obesidade grave;
*/

const peso = 120;
const altura = 1.71;
const IMC = peso / (altura * altura)
console.log(IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Abaixo do Peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do Peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}