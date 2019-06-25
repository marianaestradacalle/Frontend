import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_API} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EncargadoService {
    url = URL_API;
    encargado;
    id = localStorage.getItem('_id');

    constructor(private http: HttpClient) {
        console.log(this.id);
    }

    login(body) {
        return this.http.post(this.url + 'encargado/login', body);
    }

    getE(cc) {
        return this.http.get(this.url + 'encargado', cc);
    }

    registroE(body) {
        return this.http.post(this.url + 'encargado', body);
    }

    eliminarE(cc) {
        return this.http.delete(this.url + 'encargado', cc);
    }

    actualizarE(body) {
        return this.http.put(this.url, 'encargado', body);
    }

    getPacientes() {
        return this.http.get(`${this.url}encargado/${this.encargado._id}`);
    }
}
