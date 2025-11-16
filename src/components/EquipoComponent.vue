<template>
    <div>
        <div v-if="equipo != null && jugadores != null">
            <h1>{{equipo.nombre}}</h1>
            <img :src="equipo.imagen" alt="foto" style="width: 300px; height: 300px;">
            <h3>Champions: {{equipo.champions}}</h3>
            <h4>Web: {{equipo.web}}</h4>
            <p>Descripcion: {{equipo.descripcion}}</p>

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
        <img v-else src="https://i.pinimg.com/originals/44/0b/9d/440b9dc08fefeff13ec30dc0ae6a09df.gif" alt="foto" style="width: 400px; height: 400px;">
    </div>
</template>

<script>
import ServiceFutbol from '@/services/ServiceFutbol';
const service = new ServiceFutbol();

    export default {
        name: "EquipoComponent",
        data(){
            return {
                jugadores: null,
                equipo: null,
            }
        },
        mounted(){
            Promise.all([
                service.getEquipoId(this.$route.params.id), 
                service.getJugadoresId(this.$route.params.id)
            ])
            .then(results => {
                // 2. 'results' es un array que contiene las respuestas en orden:
                //    results[0] => Respuesta de getEquipoId
                //    results[1] => Respuesta de getJugadoresId
                
                this.equipo = results[0];
                this.jugadores = results[1];
                console.log("Ambas peticiones del equipo " + this.$route.params.id + " completadas");
            });
        },
        watch: {
            '$route.params.id' (nextVal, oldVal) {
                if(nextVal != oldVal){
                    this.jugadores = null;
                    this.equipo = null;
                    Promise.all([
                        service.getEquipoId(this.$route.params.id), 
                        service.getJugadoresId(this.$route.params.id)
                    ])
                    .then(results => {                        
                        this.equipo = results[0];
                        this.jugadores = results[1];
                        console.log("Ambas peticiones del equipo " + this.$route.params.id + " completadas");
                    });
                }
            }
        }
    }
</script>