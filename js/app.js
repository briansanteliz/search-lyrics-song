import { Ui } from './interfaz.js'
import { Api} from './api.js'
const ui = new Ui();
new ClipboardJS('.copiar');
 const boton = document.getElementById('btn-enviar');
 const enlace = document.querySelector('.copiar');
 const mensaje = document.querySelector('.copy-ok');



 

 boton.addEventListener('click', (e)=>{
    e.preventDefault()
    const artista = document.getElementById('artista').value;
    const cancion = document.getElementById('cancion').value;
    if(artista.trim() === '' || cancion.trim()=== ''){
        ui.mensaje('Todos los campos son obligatorios', 'error')
    }else{
        //consulta api
         const api = new Api(artista, cancion);
         api.queryCancion()
             .then(
                 data=>{
                 //validar si existe la cancion
                 if(data.lyrics != null){
                     ui.mostrarLetra(data, artista, cancion)
                 }else{
                     //mostrar mensaje de que no existe la canción
                     ui.mensaje('Esta canción no existe, Error en el nombre o el artista', 'failGet')
                 }
             })
    }
 })
 enlace.addEventListener('click',(e)=>{
    e.preventDefault()
    mensaje.style.display = 'block'
    setTimeout(()=>{
    mensaje.style.display = 'none'

    },3000)
 })