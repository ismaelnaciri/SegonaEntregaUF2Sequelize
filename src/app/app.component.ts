import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Empleat} from "./modelObjects/empleat.model";
import {Doctor} from "./modelObjects/doctor.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SegonaEntregaUF2Sequelize';

  empleatNumber: number = 0

  constructor(private http: HttpClient) {
    // this.ex3Post();
    // this.altaEmpleat();
    // this.llistaDoctors();
    // this.getAmountOfEmpleats();
    // this.updateDoctorWithId();
    this.getHospitalSalesAndLlits();
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

  llistaDoctors() {
    this.http.get<Doctor[]>("http://127.0.0.1:3080/api/llistaDoctors").subscribe(
      response => {
        if (response) {
          console.log("Response from server: ", response);
        }
      }
    )
  }

  getAmountOfEmpleats() {
    this.http.get<any>("http://127.0.0.1:3080/api/amountOfEmpleats", {
      params: {
        deptId: 20
      }
    }).subscribe(
      response => {
        if (response) {
          console.log("Response from server: ", response);
        }
      }
    )
  }

  updateDoctorWithId() {
    this.http.put<any>("http://127.0.0.1:3080/api/updateDoctorWithId", {
      doctor_name: "Ismael",
      doctor_especialitat: "Pediatria"
      },
      {
        params: {
          doctor_hospital_codi: 22,
          doctor_especialitat: "Psicologia"
        }
      }).subscribe(
        response => {
          if (response) {
            console.log("Response from server: ", response);
          }
        }
    )
  }

  deleteEmpleatWithId() {
    this.http.delete<any>("http://127.0.0.1:3080/api/deleteEmpleatWithId", {
      params: {
        empleat_num: this.empleatNumber
      }
    }).subscribe(
      response => {
        if (response) {
          console.log("Response from server: ", response);
        }
      }
    )
  }

  getHospitalSalesAndLlits() {
    this.http.get<any>("http://127.0.0.1:3080/api/getHospitalSalesAndLlits").subscribe(
      response => {
        if (response) {
          console.log("Response from server: ", response);
        }
      }
    )
  }
}
