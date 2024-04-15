export class Malalt {

  malalt_num?: number;
  malalt_nom?: string;
  malalt_adreca?: string;
  malalt_dnaixa?: string;
  malalt_sexe?: string;
  malalt_nss?: number;


  constructor(malalt_num: number, malalt_nom: string, malalt_adreca: string, malalt_dnaixa: string, malalt_sexe: string, malalt_nss: number) {
    this.malalt_num = malalt_num;
    this.malalt_nom = malalt_nom;
    this.malalt_adreca = malalt_adreca;
    this.malalt_dnaixa = malalt_dnaixa;
    this.malalt_sexe = malalt_sexe;
    this.malalt_nss = malalt_nss;
  }
}
