import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Empleat} from "./modelObjects/empleat.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SegonaEntregaUF2Sequelize';

  constructor(private http: HttpClient) {
    // this.ex3Post()
    // this.altaEmpleat()

  }

  ex3Post() {
    this.http.post<any>("http://127.0.0.1:3080/api/ex3Post", {}).subscribe();
  }

  altaEmpleat() {
    this.http.post<Empleat>("http://127.0.0.1:3080/api/altaEmpleat", new Empleat(
      1,
      "Ismael",
      "EMPLEAT",
      1,
      "2024-04-15 13:37:00",
      4352.55,
      1000.12,
      10,
    )).subscribe(
      response => {
        console.log(response)
      },
    );
  }
}
