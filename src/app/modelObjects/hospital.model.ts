export class Hospital {
  hospital_codi?: number;
  hospital_nom?: string;
  hospital_adreca?: string;
  hospital_telefon?: string;
  hospital_nllits?: number;


  constructor(hospital_codi: number, hospital_nom: string, hospital_adreca: string, hospital_telefon: string, hospital_nllits: number) {
    this.hospital_codi = hospital_codi;
    this.hospital_nom = hospital_nom;
    this.hospital_adreca = hospital_adreca;
    this.hospital_telefon = hospital_telefon;
    this.hospital_nllits = hospital_nllits;
  }
}
