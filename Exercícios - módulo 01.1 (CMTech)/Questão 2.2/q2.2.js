var dano = Number(prompt("Digite seu dano: "));
var saude = Number(prompt("Digite sua saúde: "));
function PersonMorreu(dano, saude) {
    if(dano > saude){
        return 1;
    }
    else{
        return 0;
    }
}
alert(PersonMorreu(dano,saude));