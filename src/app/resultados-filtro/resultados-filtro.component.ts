import {Component, Input, OnInit} from '@angular/core';
import {Provincia} from '../provincia';
import {Municipio} from '../municipio';

@Component({
    selector: 'app-resultados-filtro',
    templateUrl: './resultados-filtro.component.html',
    styleUrls: ['./resultados-filtro.component.scss']
})
export class ResultadosFiltroComponent implements OnInit {

    @Input() provincia: Provincia = new Provincia(-1, '');
    @Input() municipio: Municipio = new Provincia(-1, '');

    constructor() {
    }

    ngOnInit(): void {
    }

}
