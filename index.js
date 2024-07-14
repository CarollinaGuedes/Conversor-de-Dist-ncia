let distanceyears = prompt("Qual a distância em anos-luz? ")

let choseOption = prompt("Lista de opções\n1. Parsec(pc)\n2. Unidade Astronônima(AU)\n3. Quilômetros(KM)\n\n(Digite o númerp da opção desejada)")

let chosenUnity
let convertedDistance

switch(choseOption){
    case "1":
       chosenUnity =  "Parsec";
       convertedDistance = distanceyears *0.36601;
       break
    case "2":
        chosenUnity = "Unidade Astronômica";
        convertedDistance = distanceyears * 63241.1;
        break
    case "3":
        chosenUnity = "Kilometros";
        convertedDistance = distanceyears * 9.5 * Math.pow(10,12);  
        break
    default:
        chosenUnity = "Unidade não identificada";    
        convertedDistance= "Conversão fora do escopo";
}     

alert("Distãncia em anos-luz: " + distanceyears + "\n" + chosenUnity + "\n" + convertedDistance )