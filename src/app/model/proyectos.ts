

export class Proyectos {
    id: number;
    nombreP: string;
    descripcionP: string;
    urlP: string;
    imgP: string;

    //Constructor
    constructor(nombreP: string, descripcionP: string, urlP: string, imgP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.urlP = urlP;
        this.imgP = imgP;
    }
}
