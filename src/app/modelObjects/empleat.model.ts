export class Empleat {
  empleat_num?: number;
  empleat_nom?: string;
  empleat_ofici?: string;
  empleat_dir?: number;
  empleat_datalt?: string;
  empleat_salari?: number;
  empleat_comissio?: number;
  empleat_dept_num?: number;


  constructor(empleat_num: number, empleat_nom: string, empleat_ofici: string, empleat_dir: number, empleat_datalt: string, empleat_salari: number, empleat_comissio: number, empleat_dept_num: number) {
    this.empleat_num = empleat_num;
    this.empleat_nom = empleat_nom;
    this.empleat_ofici = empleat_ofici;
    this.empleat_dir = empleat_dir;
    this.empleat_datalt = empleat_datalt;
    this.empleat_salari = empleat_salari;
    this.empleat_comissio = empleat_comissio;
    this.empleat_dept_num = empleat_dept_num;
  }
}
