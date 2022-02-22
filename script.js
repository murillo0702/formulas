var nome = window.prompt('qual seu nome?')
function carregar(){

    
    var titulo= document.getElementById('titulo')
    var agora= new Date()
    var hora = agora.getHours()
    //var hora =
    var minutos =agora.getMinutes()
    //msg.innerText =(`agora são ${hora}:${minutos}`)

if(nome===null){
       titulo.innerHTML=`bota teu nome porra, ta achando q eu sou vidente caraio?! atualiza esta poha de site ai`
    }else if(nome.length==0){
        titulo.innerHTML=`bota teu nome porra, ta achando q eu sou vidente caraio?! atualiza esta poha de site ai`

    }
    else if (hora >=0 && hora < 12)  {
//bom dia !!
titulo.innerHTML=`Bom dia, ${nome}`


} else if (hora >= 12 && hora <18){
//boa tarde !! 
titulo.innerHTML=`Boa tarde, ${nome}`

} else {
   //boa noite!!
titulo.innerHTML=`Boa noite, ${nome}`
}
}

//Formula Bhaskara
function Bhaskarar() {
    


var A =  Number(document.getElementById('txtA').value)
var B = Number(document.getElementById('txtB').value)
var C = Number(document.getElementById('txtC').value)
var res = document.getElementById('res')
var resrdelta = document.getElementById('resrdelta')
var rescommenos = document.getElementById('rescommenos')
var rescommais = document.getElementById('rescommais')

 var delta = Math.pow(B, 2) -4*A*C
 var rdelta = Math.sqrt(delta)
 //console.log("Δ =", delta)
 //console.log(" √Δ =", rdelta)
     var bhask1mais = -B + rdelta 
     var bhask2mais = 2*A
     var bhask3mais = bhask1mais/bhask2mais

    // console.log(" -B+√Δ =", bhask1mais)
    // console.log(" 2.A =", bhask2mais)
    // console.log(" resultado final com + =", bhask3mais)
 
     var bhask1menos = -B - rdelta 
     var bhask2menos = 2*A
     var bhask3menos = bhask1menos/bhask2menos

     //console.log(" -B-√Δ =", bhask1menos)
     // console.log(" 2.A =", bhask2menos)
     // console.log(" resultado final com - =", bhask3menos)
         res.innerHTML = ("delta =", delta)
         resrdelta.innerHTML = ("raiz de delta =", rdelta)
         rescommenos.innerHTML = ("raiz de delta =", bhask3menos)
         rescommais.innerHTML = ("raiz de delta =", bhask3mais)

        

}

//Formula Area do Circulo

function areadecirculo() {
    


var r = document.getElementById('r')
var rescirculo = document.getElementById('rescirculo')

 var pi = 3.14
 var Acirculo = pi*Math.pow(Number(r.value), 2)
 rescirculo.innerHTML=`A area do circulo é ${Acirculo}`
}

function pitagorar(){
    

//pitagoras
var c1 = Number(document.getElementById('c1').value)
var c2 = Number(document.getElementById('c2').value)
var respitagoras = document.getElementById('respitagoras')

 var s1  = Math.pow(c1, 2)+Math.pow(c2, 2)
 var H = Math.sqrt(s1)
 //console.log("O valor de hipotenusa é",H)
 respitagoras.innerHTML=`O Valor de hipotenusa é ${H}`
}

//doppler
function doppler() {

    var V = 340

    var Fo = Number(document.getElementById('Fo').value)
    var Vo = Number(document.getElementById('Vo').value)
    var Ff = Number(document.getElementById('Ff').value)
    var Vf = Number(document.getElementById('Vf').value)
    var resdoppler = document.getElementById('resdoppler')


    var fonte = document.getElementsByName('Fonte')
    var observador = document.getElementsByName('observa')

    if (fonte[0].checked) {
        const conta1 = Fo * (V - Vf)
        //console.log(conta1)
        if (observador[0].checked) {
            const conta2 = Ff * (V - Vo)
            // console.log(conta2)
            const final = conta2 / conta1
            resdoppler.innerHTML = `O valor incógnito é ${final}`
            // console.log(final)
        } else {
            const conta2 = Ff * (V + Vo)
            //console.log(conta2)
            const final = conta2 / conta1
            resdoppler.innerHTML = `O valor incógnito é ${final}`
            // console.log(final)
        }
    }

    if (fonte[1].checked) {
        const conta1 = Fo * (V + Vf)
        //console.log(conta1)

        if (observador[0].checked) {
            const conta2 = Ff * (V - Vo)
            //console.log(conta2)
            const final = conta2 / conta1
            resdoppler.innerHTML = `O valor incógnito é ${final}`
            //console.log(final)
        } else {
            const conta2 = Ff * (V + Vo)
            //console.log(conta2)
            const final = conta2 / conta1
            resdoppler.innerHTML = `O valor incógnito é ${final}`
            //console.log(final)
        }
    }
}
//Juros s
function Jurossimples() {

    const juros = Number(document.getElementById('Juros').value)
    const capital = Number(document.getElementById('Capital').value)
    const taxa = Number(document.getElementById('taxa').value) / 12 / 100
    const tempo = Number(document.getElementById('tempo').value)
    const res = document.getElementById('resjurossimp')

    const conta1 = capital * taxa * tempo
    //console.log(conta1)
    if (juros === 1) {
        const conta2 = conta1 / juros
        res.innerHTML = `O valor da incógnita é ${conta2}`
    } else {
        const conta2 = juros / conta1
        res.innerHTML = `O valor da incógnita é ${conta2}`
    }
    //console.log(conta2)



}
