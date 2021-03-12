import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {Municipio} from '../municipio';
import {Provincia} from '../provincia';

@Component({
    selector: 'app-selector-filtro',
    templateUrl: './selector-filtro.component.html',
    styleUrls: ['./selector-filtro.component.scss']
})
export class SelectorFiltroComponent implements OnInit {
    @Input() provincias: Provincia[] = [];
    @Input() municipios: Municipio[] = [];
    @Output() provinciaEvent = new EventEmitter<number>();
    @Output() municipioEvent = new EventEmitter<number>();

    provinciaSel = -1;
    municipioSel = -1;

    constructor() {
    }

    ngOnInit(): void {
    }

    municipioUpdate(): void {
        this.municipioEvent.emit(this.municipioSel);
    }


    provinciaUpdate(): void {
        this.provinciaEvent.emit(this.provinciaSel);
    }

}
