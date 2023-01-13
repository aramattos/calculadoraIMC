

function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value
    text = document.getElementById('result');
const resultado = parseInt(peso / (altura * altura));


if (resultado <= 18.5) {
    text.innerHTML = 'Você está abaixo do peso normal: seu IMC é ' + resultado;
} else if (resultado >= 18.5 && resultado <= 24.9) {
    text.innerHTML = 'Você está no peso normal: seu IMC é ' + resultado;
}
else if (resultado >= 25 && resultado <= 29) {
    text.innerHTML = 'Você está no acima do peso: seu IMC é ' + resultado;
}
else {
    text.innerHTML = 'Você está na faixa obesidade, procure um médico: seu IMC é ' + resultado;
        }

}