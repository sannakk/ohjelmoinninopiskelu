//Tätä en saanut toimimaan oikein
function kirjaimet(){
  var sana = document.getElementById('ssana').value;
  var yht = 0;
  for(var s = 0; s < sana.length; s++){
  switch (sana[s]){
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
      yht++;
      break;
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
      yht+=2;
      break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
      yht+=3;
      break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
      yht+=4;
      break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
      yht+=7;
      break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
      yht+=8;
      break;
      case 'c':
      case 'C':
      yht+=10;
      break;
      default:
      yht+=12;
    }
    document.write("<p>Sanan " + sana + " pisteet on: " + yht + "</p>");
  }
}

function lotto(){
  var nrot;
  var array = [];
  for(var i = 0; i<7; i++){
  nrot = Math.floor(Math.random()*40)+1;
  array[i] = nrot;
  }
  document.write(array);
}


/*Ei harmainta hajua
function taulukko(){*/

//Alku onnistu, mutta loppuosa piti kyllä katsoa mallia
function kortit(){
  var nrot = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  var maat = ["Hertta","Ruutu","Risti","Pata"];
  var tulos = [];
  lasku = 0;
    for(maa = 0; maa < maat.length; maa++){
    for(nro = 0; nro < nrot.length; nro++){
if(maa == maat.length-1 && nro == nrot.length-1){
  tulos[lasku]=maat[maa]+nrot[nro];
}else{
tulos[lasku]=maat[maa]+nrot[nro];
  lasku++;
}
}
}
var yht = [];
for(k = 0; k < 5; k++){
luvut = tulos[Math.floor(Math.random()*52)];
yht[k] = luvut;
}
document.write(yht);
}
