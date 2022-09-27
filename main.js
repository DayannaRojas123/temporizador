boton1=document.getElementById('calcular')
boton1.addEventListener('click',
iniciar)
function iniciar(){
	let segundos = document.getElementById('tiempo').value
    temporizador(segundos)
function temporizador(segundos) {
		if(segundos===0){
			document.getElementById('resultado').innerText ='finish'
		}if(segundos<0){
			alert('por favor ingrese numeros mayores a cero')
        location. reload()
		}else{
			document.getElementById('resultado').innerText =segundos
setTimeout(temporizador,
			1000,
			segundos-1)
		}
	}
}
