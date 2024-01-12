import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: HeroeModel[] = [
    { nombre: 'Mortadelo', pais: 'españa', edad: 54, poder: 'gafas', id: 1 },
    { nombre: 'Godzilla', pais: 'japon', edad: 221, poder: 'Es gigante', id: 2 },
    { nombre: 'Goku', pais: 'Planeta Vegeta', edad: 30, poder: 'Kamehameha', descripcion: 'Alumno del maestro mutenRoi', id: 3 }
  ]

  id: number = this.heroes.length;
  constructor() { }

  getId() {
    let idAux = this.id;
    this.id = this.id + 1
    return idAux + 1
  }


  addHeroe(heroe) {
    this.heroes.push(heroe)
  }

  editHeroe(heroe) {
    let idAux;
    this.heroes.forEach((h, idx) => {
      if (h.id == heroe.id) {
        idAux = idx
      }
    })
    this.heroes.splice(idAux, 1, heroe);
  }

  deleteHeroe(heroe) {

    let idAux;
    this.heroes.forEach((h, idx) => {
      if (h.id == heroe.id) {
        idAux = idx
      }
    })
    this.heroes.splice(idAux, 1)
  }

  getHeroes() {
    return [...this.heroes];
  }


  filtrarHeroes(str) {
    if(str){

      let heroesFiltrados = this.heroes
      .filter(item => item.nombre.toLowerCase().indexOf(str.toLowerCase()) >= 0);
      return heroesFiltrados
    }else{
      return this.heroes
    }

  }


  getHeroe(id){
    return this.heroes.find( h => h.id == id)
  }
}
