export class Dept {
  dept_num?: number;
  dept_nom?: string;
  dept_loc?: string;


  constructor(dept_num: number, dept_nom: string, dept_loc: string) {
    this.dept_num = dept_num;
    this.dept_nom = dept_nom;
    this.dept_loc = dept_loc;
  }
}
