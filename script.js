let jogadaPedra = [0,33,33,33];
let jogadaPapel = [0,33,33,33];
let jogadaTesoura = [0,33,33,33];



  function jogo(escolha,animação){

    var jogadaInimigo;


if (escolha === 'imgPedra') {

    varRedeEntrada = "Pedra" 
    varRedeEntradashow = document.getElementById('redeEntrada');
    varRedeEntradashow.innerHTML =  varRedeEntrada

const escolhaAleatoria = Math.floor(Math.random() * 99) + 1;
// escolhaInimigo = getChoicePosition(escolhaAleatoria, jogadaPedra);
if (escolhaAleatoria <= jogadaPedra[1]) {
 jogadaInimigo = 1;
} else if (escolhaAleatoria <= jogadaPedra[1] + jogadaPedra[2]) {
jogadaInimigo = 2;
} else {
jogadaInimigo = 3;
}
}
//------------
if (escolha === 'imgPapel') {

    varRedeEntrada = "Papel" 
    varRedeEntradashow = document.getElementById('redeEntrada');
    varRedeEntradashow.innerHTML =  varRedeEntrada

const escolhaAleatoria = Math.floor(Math.random() * 99) + 1;
if (escolhaAleatoria <= jogadaPapel[1]) {
 jogadaInimigo = 1;
} else if (escolhaAleatoria <= jogadaPapel[1] + jogadaPapel[2]) {
jogadaInimigo = 2;
} else {
jogadaInimigo = 3;
}
}
//------------
if (escolha === 'imgTesoura') {

    varRedeEntrada = "Tesoura" 
    varRedeEntradashow = document.getElementById('redeEntrada');
    varRedeEntradashow.innerHTML =  varRedeEntrada


const escolhaAleatoria = Math.floor(Math.random() * 99) + 1;
if (escolhaAleatoria <= jogadaTesoura[1]) {
 jogadaInimigo = 1;


} else if (escolhaAleatoria <= jogadaTesoura[1] + jogadaTesoura[2]) {
jogadaInimigo = 2;

} else {
jogadaInimigo = 3;

}
}


var escolhaInimgo = '';
var animaçãoInimigo = '';
if(jogadaInimigo == 1){
  escolhaInimgo = 'imgPedra2';
  animaçãoInimigo = 'animapedra2';

  varRedeSaida = "Pedra" 
varRedeSaidashow = document.getElementById('redeSaida');
 varRedeSaidashow.innerHTML =  varRedeSaida

}
if(jogadaInimigo == 2){
  escolhaInimgo = 'imgPapel2';
  animaçãoInimigo = 'animapapel2';
  varRedeSaida = "Papel" 
varRedeSaidashow = document.getElementById('redeSaida');
 varRedeSaidashow.innerHTML =  varRedeSaida
}
if(jogadaInimigo == 3){
  escolhaInimgo = 'imgTesoura2';
  animaçãoInimigo = 'animatesoura2';
  varRedeSaida = "Tesoura" 
varRedeSaidashow = document.getElementById('redeSaida');
 varRedeSaidashow.innerHTML =  varRedeSaida
}

if(jogadaInimigo == 1 && escolha == 'imgPedra'){
  console.log("inimigo tambem colocou pedra DEU EMPATE");
  if(jogadaPedra[1] > 0 && jogadaPedra[2] <= 99 && jogadaPedra[3] <= 99){
    jogadaPedra[1] = jogadaPedra[1] - 6;
    jogadaPedra[2] = jogadaPedra[2] + 3;
    jogadaPedra[3] = jogadaPedra[3] + 3;

 
    if(jogadaPedra[1] < 0){
      jogadaPedra[1] = 0;
    }
    varRedePedra = jogadaPedra[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedePapel = jogadaPedra[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel

    varRedeTesoura = jogadaPedra[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura


  }
  console.log(jogadaPedra);
  resultado('EMPATE',escolha,escolhaInimgo)
}
if(jogadaInimigo == 2 && escolha == 'imgPedra'){
  console.log("inimigo colocou papel VC PERDEU");
  if(jogadaPedra[1] > 0 && jogadaPedra[2] < 99){
    jogadaPedra[1] = jogadaPedra[1] - 6;
    jogadaPedra[2] = jogadaPedra[2] + 6;

    if(jogadaPedra[1] < 0){
      jogadaPedra[1] = 0;
    }
    varRedePedra = jogadaPedra[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedePapel = jogadaPedra[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel



 
  }
  console.log(jogadaPedra);
  resultado('PERDEU',escolha,escolhaInimgo)
}
if(jogadaInimigo == 3 && escolha == 'imgPedra'){
  console.log("inimigo colocou tesoura VC GANHOU");
  if(jogadaPedra[3] > 0 && jogadaPedra[1] < 99){
    jogadaPedra[3] = jogadaPedra[3] - 6;
    jogadaPedra[2] = jogadaPedra[2] + 6;
    if(jogadaPedra[3] < 0){
      jogadaPedra[3] = 0;
    }


    varRedePapel = jogadaPedra[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel

    varRedeTesoura = jogadaPedra[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaPedra);
  resultado('GANHOU',escolha,escolhaInimgo)
}

//--------------------------------
if(jogadaInimigo == 1 && escolha == 'imgPapel'){
  console.log("inimigo colocou pedra VC GANHOU");
  if(jogadaPapel[1] > 0 && jogadaPapel[3] < 99){
    jogadaPapel[1] = jogadaPapel[1] - 6;
    jogadaPapel[3] = jogadaPapel[3] + 6;
    if(jogadaPapel[1] < 0){
      jogadaPapel[1] = 0;
    }
    varRedePedra = jogadaPapel[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedeTesoura = jogadaPapel[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaPapel);
  resultado('GANHOU',escolha,escolhaInimgo)
}
if(jogadaInimigo == 2 && escolha == 'imgPapel'){
  console.log("inimigo tambem colocou papel DEU EMPATE");
  if(jogadaPapel[2] > 0 && jogadaPapel[1] <= 99 && jogadaPapel[3] <= 99){
    jogadaPapel[2] = jogadaPapel[2] - 6;
    jogadaPapel[1] = jogadaPapel[1] + 3;
    jogadaPapel[3] = jogadaPapel[3] + 3;
    if(jogadaPapel[2] < 0){
      jogadaPapel[2] = 0;
    }
    varRedePedra = jogadaPapel[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedePapel = jogadaPapel[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel

    varRedeTesoura = jogadaPapel[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaPapel);
  resultado('EMPATE',escolha,escolhaInimgo)
}
if(jogadaInimigo == 3 && escolha == 'imgPapel'){
  console.log("inimigo colocou tesoura VC PERDEU");
  if(jogadaPapel[1] > 0 && jogadaPapel[3] < 99){
    jogadaPapel[3] = jogadaPapel[3] + 6;
    jogadaPapel[1] = jogadaPapel[1] - 6;
    if(jogadaPapel[1] < 0){
      jogadaPapel[1] = 0;
    }
    varRedePedra = jogadaPapel[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedeTesoura = jogadaPapel[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaPapel);
  resultado('PERDEU',escolha,escolhaInimgo)
}

if(jogadaInimigo == 1 && escolha == 'imgTesoura'){
  console.log("inimigo colocou pedra VC perdeu");
  if(jogadaTesoura[3] > 0 && jogadaTesoura[1] < 99){
    jogadaTesoura[1] = jogadaTesoura[1] + 6;
    jogadaTesoura[3] = jogadaTesoura[3] - 6;
    if(jogadaTesoura[3] < 0){
      jogadaTesoura[3] = 0;
    }
    varRedePedra = jogadaTesoura[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra



    varRedeTesoura = jogadaTesoura[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaTesoura);
  resultado('PERDEU',escolha,escolhaInimgo)

}

if(jogadaInimigo == 2 && escolha == 'imgTesoura'){
  console.log("inimigo colocou papel VC GANHOU");
  if(jogadaTesoura[2] > 0 && jogadaTesoura[1] < 99){
    jogadaTesoura[1] = jogadaTesoura[1] + 6;
    jogadaTesoura[2] = jogadaTesoura[2] - 6;
    if(jogadaTesoura[2] < 0){
      jogadaTesoura[2] = 0;
    }

    varRedePedra = jogadaTesoura[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedePapel = jogadaTesoura[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel



  }
  console.log(jogadaTesoura);
  resultado('GANHOU',escolha,escolhaInimgo)
}

if(jogadaInimigo == 3 && escolha == 'imgTesoura'){
  console.log("inimigo tambem colocou tesoura DEU EMPATE");
  if(jogadaTesoura[3] > 0 && jogadaTesoura[1] <= 99 && jogadaTesoura[2] <= 99){
    jogadaTesoura[3] = jogadaTesoura[3] - 6;
    jogadaTesoura[1] = jogadaTesoura[1] + 3;
    jogadaTesoura[2] = jogadaTesoura[2] + 3;
    if(jogadaTesoura[3] < 0){
      jogadaTesoura[3] = 0;
    }
    varRedePedra = jogadaTesoura[1]+"%" 
    varRedePedrashow = document.getElementById('redePedra');
    varRedePedrashow.innerHTML =  varRedePedra

    varRedePapel = jogadaTesoura[2]+"%" 
    varRedePapelshow = document.getElementById('redePapel');
    varRedePapelshow.innerHTML =  varRedePapel

    varRedeTesoura = jogadaTesoura[3]+"%" 
    varRedeTesourashow = document.getElementById('redeTesoura');
    varRedeTesourashow.innerHTML =  varRedeTesoura
  }
  console.log(jogadaTesoura);
  resultado('EMPATE',escolha,escolhaInimgo)
}


      document.getElementById(escolha).className = animação;
      document.getElementById(escolhaInimgo).className = animaçãoInimigo;
      setTimeout(function() {
          document.getElementById(escolha).style.animationPlayState = "paused";
          document.getElementById(escolhaInimgo).style.animationPlayState = "paused";
      }, 500);
      
  }

function resultado(resultado,escolha,enemyEscolha){

  if (resultado == 'GANHOU'){
      document.getElementById('perdeu2').style.visibility='visible'; 
      document.getElementById('ganhou1').style.visibility='visible'; 
  contador1 ++;
  contador1show = document.getElementById('contador1show');
  contador1show.innerHTML =  contador1;
  }
  if (resultado == 'PERDEU'){
      document.getElementById('perdeu1').style.visibility='visible'; 
      document.getElementById('ganhou2').style.visibility='visible'; 
  contador2 ++;
  contador2show = document.getElementById('contador2show');
  contador2show.innerHTML =  contador2;
  }

  setTimeout(function() {
          document.getElementById(escolha).style.animationPlayState = "running";
          document.getElementById(enemyEscolha).style.animationPlayState = "running";
        
      }, 1000);
      setTimeout(function() {
         
         document.getElementById(escolha).className = '';
         document.getElementById(enemyEscolha).className = '';
      document.getElementById('perdeu1').style.visibility='hidden'; 
      document.getElementById('ganhou2').style.visibility='hidden'; 
      document.getElementById('perdeu2').style.visibility='hidden'; 
      document.getElementById('ganhou1').style.visibility='hidden'; 
      }, 1500);
 
  }
