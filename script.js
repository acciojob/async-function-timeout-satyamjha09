


const Delay = document.getElementById("delay");

const sumbit = document.getElementById("btn");

sumbit.addEventListener("click" , () => {

    

    const Text = document.getElementById("text");
    const Number = document.getElementById("delay").value.trim();

    let timer = parseInt(Number);


    const Output = document.getElementById("output");

    Output.innerHTML = "";


    setTimeout(() => {
        Output.innerHTML = Text.value.trim();
    }, timer * 1000)

    

})
