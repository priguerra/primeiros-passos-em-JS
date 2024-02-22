/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preçonormal de etiqueta ea escolha de condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 

    Código Condição de pagamento:
    - À vista débito = recebe 10% de desconto;
    - À vista no dinheiro ou pix = recebe 15% de desconto;
    - Em 2x = preço normal de etiqueta sem juros;
    - Acima de 2x = preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta); 
} else { 
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}