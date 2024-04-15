export class Sala {

  sala_codi?: number;
  sala_hospital_codi?: number;
  sala_nom?: string;
  sala_nllits?: number;


  constructor(sala_codi: number, sala_hospital_codi: number, sala_nom: string, sala_nllits: number) {
    this.sala_codi = sala_codi;
    this.sala_hospital_codi = sala_hospital_codi;
    this.sala_nom = sala_nom;
    this.sala_nllits = sala_nllits;
  }
}
