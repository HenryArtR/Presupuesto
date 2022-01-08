import { Data } from "@angular/router";

export interface Pressupost{
    servicios: string[];
    numPaginas?: number;
    numIdiomas?: number;
    titulo: string;
    cliente: string;
    precio: number;
    data: string;
}