import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Municipio} from './municipio';
import {Provincia} from './provincia';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    cacheMunicipios: Municipio[] = [];
    cacheProvincias: Provincia[] = [];

    async getAllMunicipios(): Promise<Municipio[]> {
        if (this.cacheMunicipios.length === 0) {
            this.cacheMunicipios = await this.http.get<Municipio[]>('https://raw.githubusercontent.com/IagoLast/pselect/master/data/municipios.json').toPromise();
        }
        return this.cacheMunicipios;
    }

    async getAllProvincias(): Promise<Provincia[]> {
        if (this.cacheProvincias.length === 0) {
            this.cacheProvincias = await this.http.get<Provincia[]>('https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json').toPromise();
        }
        return this.cacheProvincias;
    }

    async getMunicipiosByProvincia(idProvincia: number): Promise<Municipio[]> {
        const municipios = await this.getAllMunicipios();
        return municipios.filter((municipio: Municipio) => {
            return municipio.id.toString(10).substring(0, 2) === idProvincia.toString();
        });
    }
}
