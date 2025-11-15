<template>
    <div>
        <h1>Subir Archivo</h1>
        <form>
            <label>Introduzca un archivo: </label>
            <input type="file" class="form-control" @change="sacarArchivo"/>
            <br>
            <button class="btn btn-info" @click.prevent="subirArchivo">Subir Archivo</button>
        </form>
        <br>
        <h4>{{ mensaje }}</h4>
    </div>
</template>

<script>
import ServiceArchivos from '@/services/ServiceArchivos';
const service = new ServiceArchivos();

    export default {
        name: "ArchivoComponent",
        data(){
            return {
                archivo: null,
                bodyArchivo: {
                    fileName: "",
                    fileContent: ""
                },
                mensaje: ""
            }
        },
        methods: {
            subirArchivo() {
                this.bodyArchivo.fileName = this.archivo.name;

                const reader = new FileReader();
                //Se pone primero reader.onload para ya tener definido que hacer cuando termine la lectura,
                //si inicias antes la lectura que el reader.onload puede pasar que la lectura finalice sin que este aun definido reader.onload
                //Por lo que no se llegaria a hacer nunca lo que hay dentro del reader.onload
                reader.onload = () => {
                    let base64String = "";
                    if (typeof reader.result == 'string') {
                        base64String = reader.result.split(',')[1];
                    }
                    
                    this.bodyArchivo.fileContent = base64String;

                    service.subirArchivo(this.bodyArchivo).then(() => {
                        this.mensaje = "Archivo subido con exito";
                    });
                }
                //Inicia la lectura del archivo
                reader.readAsDataURL(this.archivo);
            },
            sacarArchivo(event) {
                this.archivo = event.target.files[0];
            }
        }
    }
</script>