<template>
    <div>
        <h1>Jugadores</h1>
        <h3>{{ mensaje }}</h3>
    </div>
</template>

<script>
//import ServiceFutbol from '@/services/ServiceFutbol';
//const service = new ServiceFutbol();

    export default {
        name: "JugadorComponent",
        data(){
            return {
                jugadores: [],
                mensaje: "",
            }
        },
        mounted(){
            if(this.$route.params.nombre == ""){
                this.mensaje = "No has introducido ningun nombre.";
            } else {
                this.mensaje = "Nombre: " + this.$route.params.nombre;
            }
        },
        watch: {
            '$route.params.nombre' (nextVal, oldVal) {
                if(nextVal != oldVal){
                    if(this.$route.params.nombre == ""){
                        this.mensaje = "No has introducido ningun nombre.";
                    } else {
                        this.mensaje = "Nombre: " + this.$route.params.nombre;
                    }
                }
            }
        },
    }
</script>