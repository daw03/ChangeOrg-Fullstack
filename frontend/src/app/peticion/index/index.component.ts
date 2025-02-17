import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
