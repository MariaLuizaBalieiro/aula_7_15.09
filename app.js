var calculadorarImc = require('./modulo/calculadorarImc')
var readline = require ('readline');
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
    });

    entradaDados.question ("digite sua altura: ", function(valorAltura) { 
        let tabuada = valorAltura; 
    
        entradaDados.question ("Digite o seu peso : ", function(valorPeso){
            let contadorInicial = valorPeso;


            calculadorarImc.gerarIMC (valorAltura, valorPeso);


        
        
        });
    
    });
