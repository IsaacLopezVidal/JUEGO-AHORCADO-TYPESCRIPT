
import {question,questionInt} from "readline-sync";
var palabaraAjuego:string[]=new Array(3)
palabaraAjuego[1]="COMPITE"
palabaraAjuego[2]="VIVENCIAS"
palabaraAjuego[3]="PROYECTOR"
var palabra:string[]
var cadena:string[]
var intentos:number=3
function inicializa(){
    var numeroJuego=Math.floor(Math.random() * 3) + 1 
    var i;
    palabra=palabaraAjuego[numeroJuego].split("")
    cadena=new Array(palabra.length)
    for (i=0;i<cadena.length;i++){
        cadena[i]="_"
    }
    cadena[0]=palabra[0]
    cadena[cadena.length-1]=palabra[palabra.length-1]
}
function encuentraCoincidencias(letra:string):boolean{
    var letras:string
    var i:number
    var encontrado:boolean=false
    for(i=0;i<palabra.length;i++){
        if(palabra[i]==letra && cadena[i]!=letra){
            encontrado=true
            cadena[i]=palabra[i]
        }
    }
    return encontrado
}
function isEquals():boolean{
    var i:number
    var encontrado:number=0;
    for(i=0;i<palabra.length;i++){
        if (palabra[i]==cadena[i]){
            encontrado++
        }
    }
    if (encontrado==palabra.length)
    {
        return true
    }
    else{
        return false
    }
}
inicializa()
do{
    var letra:string;
    console.clear()
    console.log("---AHORCADO---\nTienes "+intentos+ " intentos.\n"+cadena.join(" "))
    letra=question("Ingresa letra: ")
    if (!encuentraCoincidencias(letra.toUpperCase())){
        intentos--
    }
    if(isEquals()){
        console.log(cadena.join(" "))
        intentos=0
    }
}while(intentos!=0)



