export class Experiencia {
    id?: number;
    nombreEmpresa: string;
    fechaIn: string;
    fechaOut: string;
    puestoEmpresa: string;
    domicilioEmpresa: string;
    descripcionEmpresa: string;
    urlEmpresa: string;

    //constructor
    constructor(nombreEmpresa: string, fechaIn: string, fechaOut: string, puestoEmpresa: string, domicilioEmpresa: string, descripcionEmpresa: string, urlEmpresa: string) {
        this.nombreEmpresa = nombreEmpresa;
        this.fechaIn = fechaIn;
        this.fechaOut = fechaOut;
        this.puestoEmpresa = puestoEmpresa;
        this.domicilioEmpresa = domicilioEmpresa;
        this.descripcionEmpresa = descripcionEmpresa;
        this.urlEmpresa = urlEmpresa;
    }
}
