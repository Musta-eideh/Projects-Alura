var secretNumber = parseInt(Math.random()* 101);

while (kick != secretNumber) {
    var kick = prompt('Digite um número entre 0 e 100: ');
    if(kick == secretNumber) {
        alert('Parábens, você acertou!')
    } else if (kick > secretNumber){
        alert('Hmm, você errou. Dica: o número é menor...')
    } else if(kick < secretNumber){
        alert('Hmm, você errou. Dica: o número é maior...')
    }
}