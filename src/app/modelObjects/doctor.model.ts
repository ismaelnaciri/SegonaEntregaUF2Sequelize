export class Doctor {
  doctor_codi?: number;
  doctor_hospital_codi?: number;
  doctor_nom?: string;
  doctor_especialitat?: string;


  constructor(doctor_codi: number, doctor_hospital_codi: number, doctor_nom: string, doctor_especialitat: string) {
    this.doctor_codi = doctor_codi;
    this.doctor_hospital_codi = doctor_hospital_codi;
    this.doctor_nom = doctor_nom;
    this.doctor_especialitat = doctor_especialitat;
  }
}
