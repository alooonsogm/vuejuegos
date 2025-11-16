import axios from 'axios';
import Global from './../Global';

export default class ServiceFutbol {
    getEquipos(){
        return new Promise(function(resolve) {
            var request = "api/Equipos";
            axios.get(Global.urlFutbol + request).then(response => {
                console.log("Leyendo equipos.")
                resolve(response.data);
            })
        })
    }

    getJugadoresNombre(nombre){
        return new Promise(function(resolve) {
            var request = "api/Jugadores/BuscarJugadores/" + nombre
            axios.get(Global.urlFutbol + request).then(response => {
                console.log("Leyendo jugadores con nombre: " + nombre);
                resolve(response.data);
            })
        })
    }

    getEquipoId(idEquipo){
        return new Promise(function(resolve) {
            var request = "api/Equipos/" + idEquipo
            axios.get(Global.urlFutbol + request).then(response => {
                setTimeout(() => {
                    resolve(response.data);
                }, 1000);
            });
        })
    }

    getJugadoresId(idEquipo){
        return new Promise(function(resolve) {
            var request = "api/Jugadores/JugadoresEquipos/" + idEquipo;
            axios.get(Global.urlFutbol + request).then(response => {
                setTimeout(() => {
                    resolve(response.data);
                }, 4000);
            });
        })
    }
}