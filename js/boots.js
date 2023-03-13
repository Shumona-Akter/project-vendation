// document.getElementById('nav-boots').addEventListener('click', function(){
//     const frreBoots = document.getElementById("free-boots-display");
//     frreBoots.classList.toggle("d-none")
//     console.log(frreBoots)
// });

const modalContact = () =>{
    const frreBoots = document.getElementById("free-boots-display");
    frreBoots.classList.toggle("d-none")
    console.log(frreBoots)
}

document.getElementById('login-close').addEventListener('click', function(){
    const frreBoots = document.getElementById("free-boots-display");
    frreBoots.classList.add("d-none")
})

document.getElementById('contac-submit').addEventListener('click', function(){
    window.location.href = "success.html";
})

document.getElementById('login-close-sm').addEventListener('click', function(){
    const frreBoots = document.getElementById("free-boots-display");
    frreBoots.classList.add("d-none")
})

document.getElementById('counter-boots').addEventListener('click', function(){
    const frreBoots = document.getElementById("free-boots-display");
    frreBoots.classList.add("d-none")
})