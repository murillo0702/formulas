//Formula Bhaskara
var A = 1
var B = -1
var C = -6
 var delta = Math.pow(B, 2) -4*A*C
 var rdelta = Math.sqrt(delta)
 console.log("Δ =", delta)
 console.log(" √Δ =", rdelta)
     var bhask1mais = -B + rdelta 
     var bhask2mais = 2*A
     var bhask3mais = bhask1mais/bhask2mais
     console.log(" -B+√Δ =", bhask1mais)
     console.log(" 2.A =", bhask2mais)
     console.log(" resultado final com + =", bhask3mais)
 
     var bhask1menos = -B - rdelta 
     var bhask2menos = 2*A
     var bhask3menos = bhask1menos/bhask2menos
     console.log(" -B-√Δ =", bhask1menos)
     console.log(" 2.A =", bhask2menos)
     console.log(" resultado final com - =", bhask3menos)
     
//Formula Area do Circulo
var r = 3

 var pi = 3.14
 var A = pi*Math.pow(r, 2)
 console.log("A area do circulo é", A)

//pitagoras
var c1 = 34
var c2 = 67

 var s1  = Math.pow(c1, 2)+Math.pow(c2, 2)
 var H = Math.sqrt(s1)
 console.log("O valor de hipotenusa é",H)
