

const sumbit = document.getElementById("btn");

sumbit.addEventListener("click" , async () => {
	const Output = document.getElementById("output");
	const Text = document.getElementById("text").value;
	const Delay = document.getElementById("delay").value;

	let data;

	try{
		if(Delay == 1){
			await setTimeout(() => {
			   Output.innerHTML = "Test - 1."
			}, 1000)
			
		}else if(Delay == 2){
			await setTimeout(() => {
			   Output.innerHTML = "Test - 2"
			}, 2000)
		}
		
	}catch(error){
		
	}
	
})