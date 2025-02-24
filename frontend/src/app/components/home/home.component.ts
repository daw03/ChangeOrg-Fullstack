import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../peticion/peticion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errors: any = null;
  peticiones: any[] = [];

  constructor(private peticionService: PeticionService) { }

  ngOnInit(): void {
    this.pillarPeticiones(); 
  }

  pillarPeticiones(): void {
    this.peticionService.index().subscribe(
      (data) => {
        this.peticiones = data;
        console.log(this.peticiones)
      },
      (error) => {
        this.errors = error;
        console.log(this.errors);
      }
    );
  }
}