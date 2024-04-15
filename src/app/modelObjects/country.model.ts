export class Country {
  country_id?: number;
  country?: string;
  last_update?: string;


  constructor(country_id: number, country: string, last_update: string) {
    this.country_id = country_id;
    this.country = country;
    this.last_update = last_update;
  }
}
