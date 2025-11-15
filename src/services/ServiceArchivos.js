import axios from 'axios';
import Global from './../Global';

export default class ServiceArchivos {
    subirArchivo(body){
        return new Promise(function(resolve) {
            var request = "api/TestingFiles";
            axios.post(Global.urlArchivos + request, body).then(response => {
                console.log("Subiendo archivo: " + body.fileName);
                resolve(response);
            })
        })
    }
}