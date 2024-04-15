export class Plantilla {

  plantilla_hospital_codi?: number;
  plantilla_sala_codi?: number;
  plantilla_empleat_num?: number;
  plantilla_nom?: string;
  plantilla_funcio?: string;
  plantilla_torn?: string;
  plantilla_salari?: number;


  constructor(plantilla_hospital_codi: number, plantilla_sala_codi: number, plantilla_empleat_num: number, plantilla_nom: string, plantilla_funcio: string, plantilla_torn: string, plantilla_salari: number) {
    this.plantilla_hospital_codi = plantilla_hospital_codi;
    this.plantilla_sala_codi = plantilla_sala_codi;
    this.plantilla_empleat_num = plantilla_empleat_num;
    this.plantilla_nom = plantilla_nom;
    this.plantilla_funcio = plantilla_funcio;
    this.plantilla_torn = plantilla_torn;
    this.plantilla_salari = plantilla_salari;
  }
}
