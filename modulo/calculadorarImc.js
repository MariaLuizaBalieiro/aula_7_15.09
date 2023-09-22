// ********************************************************************************
// objetivo: realizar ativiadaes afim de colocar os conhecimentos em pratica      *
// data: 15/09/2023                                                               *
// autor: Maria Luiza                                                             *
// vrsão: 1.0                                                                     *
// ********************************************************************************


const gerarIMC = function(valorAltura, valorPeso){

    let altura = valorAltura;
    let peso = valorPeso;
    let imc;
    let status = false;




    if(peso == '' || altura == ''){
        console.log('ERRO: Demonstrar todos os valores')
    }else if (isNaN(peso) || isNaN(altura)){
        console.log('ERRO: É obrigatoria a entrada de dados')
    }else{
      
        altura = Number (altura);
        peso = Number (peso);
       
        imc = peso / (altura * altura)
    
        if(imc < 18.5){
            console.log('seu imc é: ' + imc)
            console.log('Você está abaixo do peso indicado')
    
        }else if(imc >= 18.5 && imc <= 24.9){
            console.log('seu imc é: ' + imc)
            console.log('Seu peso está normal!')
    
        }else if(imc >= 25.0 && imc <= 29.9){
            console.log('seu imc é: ' + imc)
            console.log('Você está acima do peso indicado')
    
        }else if (imc >= 25.0 && imc <= 29.9){
            console.log('seu imc é: ' + imc)
            console.log('Você está no primeiro nível de obesidade')
    
        }else if(imc >= 30.0 && imc <= 39.9){
            console.log('seu imc é: ' + imc)
            console.log('Você está no segundo nível de obesidade')
    
        }else if (imc>= 40.0 ){
            console.log('seu imc é: ' + imc)
            console.log('Você está no terceiro nível de obesidade ')
        }

        status = true

    }

    return status
}

module.exports = {
    gerarIMC 
}





