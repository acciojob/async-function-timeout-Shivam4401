
document.getElementById("btn").addEventListener("click" ,async function(){
	let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;
	await new Promise((resolve,reject) => {
       setTimeout(()=>{
		   resolve(text);
	   },delay);
	})

	document.getElementById("output").textContent = text;
});
