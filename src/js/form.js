function loader(){
    gsap.from(".content-left",{
    y:-150,
    opacity:0,
    duration:2,
    stagger:0.3
})

gsap.from(".content-right",{
    x:-150,
    opacity:0,
    duration:2,
    stagger:0.3
})
}

function validar(){
    let input = document.getElementById("value").value

    if (input === "" || input === null ) {

        let p = document.getElementById("erro");
        p.innerHTML = "O email ou senha que você digitou estão incorrectos.";
        p.style.color = "red";
    }
}