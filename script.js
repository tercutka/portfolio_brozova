gsap.registerPlugin(ScrollTrigger)
gsap.to('.box',{
    x: 200,
    duration: 1
})



let cislo1 =10;
let cislo2 = 5;
var promena = "ahoj";

function plus(mezisoucet){ 
    let vysledek = cislo1 + cislo2;
    console.log(mezisoucet + vysledek)
}
plus(100)

function obsahTrojuhelniku(a, v){
    //a- strana AB, v = vyska
    let obsah = (1/2 * a * v) 
    console.log("strana A: ",a," vyska V: ",v, "obsah:" ,obsah)
}
obsahTrojuhelniku(3.1 , 3)

gsap.to('.horizontal-content', {
    xPercent: -100 * (document.querySelectorAll('.box').length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.horizontal-scroll',
        start: 'top top',
        end: '+=2000',
        pin: true,
        scrub: true,
    }
});

//vytvor funkci na pythagorova veta
function pythagorovaVeta(a,b){ 
    let c = ((a * a) + (b * b))
let odmocneneC = math.sqrt(c)
console.log(odmocneneC)
}
pythagorovaVeta(6,5)

function vypisPrumer(znamkaMatika, znamkaWebovky, znamkaCestina){ 
    var prumer = znamkaCestina + znamkaMatika + znamkaWebovky / 3;
    console.log(prumer);
}
vypisPrumer(5,1,3)

let pole = [5,1,3]

function vypisPrumer(array){ 
    if (array = null || array == null){ 
        alert ("pozor, je tu null")
    }else{ 
        for(let i = 0; i < array.length; i++)
            { 
                console.log(array[i])
            }

}
}
vypisPrumer(pole)


