<template>
    <div>
        <h1>Jugadores</h1>
        <h3 v-if="mensaje != ''">{{ mensaje }}</h3>
        <div v-else>
            <table class="table">
                <thead>
                    <th>ID Jugador</th>
                    <th>Nombre</th>
                    <th>Posicion</th>
                    <th>Imagen</th>
                    <th>Fecha de nacimiento</th>
                    <th>Pais</th>
                </thead>
                <tbody>
                    <tr v-for="jugador in jugadores" :key="jugador">
                        <td>{{jugador.idJugador}}</td>
                        <td>{{jugador.nombre}}</td>
                        <td>{{jugador.posicion}}</td>
                        <td><img :src="jugador.imagen" alt="foto" style="width: 150px; height: 150px;"></td>
                        <td>{{jugador.fechaNacimiento}}</td>
                        <td>{{jugador.pais}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ServiceFutbol from '@/services/ServiceFutbol';
const service = new ServiceFutbol();

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
                service.getJugadoresNombre(this.$route.params.nombre).then(result => {
                    this.jugadores = result;
                });
            }
        },
        watch: {
            '$route.params.nombre' (nextVal, oldVal) {
                if(nextVal != oldVal){
                    this.mensaje = "";
                    if(this.$route.params.nombre == ""){
                        this.mensaje = "No has introducido ningun nombre.";
                    } else {
                        service.getJugadoresNombre(this.$route.params.nombre).then(result => {
                            this.jugadores = result;
                        });
                    }
                }
            }
        },
    }
</script>