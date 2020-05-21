const form = document.getElementById('formulario-buscar')
export class Ui{

    mensaje(mensaje, tipo){
        const divMensaje = document.createElement('div')
        const contendor=  document.getElementById('mensajes')
        if(tipo === 'error'){
            divMensaje.classList.add('error')
            divMensaje.innerHTML = `${mensaje}`
            contendor.appendChild(divMensaje)
            setTimeout(()=>{
                document.querySelector('#mensajes > div').remove()
                form.reset()
            },3000)
        }else if(tipo = 'failGet'){
            divMensaje.classList.add('error')
            divMensaje.innerHTML = `${mensaje}`
            contendor.appendChild(divMensaje)
            setTimeout(()=>{
                document.querySelector('#mensajes > div').remove()
                form.reset()
            },3000)
        }
    }
    mostrarLetra(data, artista, cancion){
        this.limpiar();
        form.reset();
        let {lyrics } = data;
        //insertando titulo de la cancion
        const divTitulo = document.querySelector('.titulo')
        const titulo = document.createElement('h3');
        titulo.style.textAlign = 'center';
        titulo.style.textTransform = 'capitalize'
        titulo.innerText = `${cancion} - ${artista}`
       divTitulo.appendChild(titulo)
        //insertando div para copiar
        const enlace = document.querySelector('.copiar');
       enlace.style.display = 'block'
       //insertando letra de la canción
       const resultado = document.getElementById('resultado')
       resultado.innerHTML = `${lyrics}`
    }
    limpiar(){
       const title =  document.querySelector('h3')
        if(title){
            title.remove()
        }
    }
    
}
