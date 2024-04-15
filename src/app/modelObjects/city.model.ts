export class City {
  city_id?: number;
  city?: string;
  country_id?: number;
  last_update?: string;


  constructor(city_id: number, city: string, country_id: number, last_update: string) {
    this.city_id = city_id;
    this.city = city;
    this.country_id = country_id;
    this.last_update = last_update;
  }
}
