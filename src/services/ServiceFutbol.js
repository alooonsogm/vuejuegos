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
}