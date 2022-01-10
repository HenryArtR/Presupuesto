
export interface Pressupost{
    servicios: string[];
    numPaginas?: number;
    numIdiomas?: number;
    titulo: string;
    cliente: string;
    precio: number;
    data: string;
}
export interface ServicesParams {
    web: boolean,
    seo: boolean,
    ads: boolean,
    nPaginas?: number,
    nIdiomas?: number
}