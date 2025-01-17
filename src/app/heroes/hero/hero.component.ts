import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string = 'iroman';
public age: number = 45;

get capitalizedName():string{
  return this.name.toLocaleUpperCase();
}

getHeroDescription(): string{
  return `${ this.name} - ${ this.age}`;
}

changeName(){
this.name = 'Spiderman';
}

changeAge(){
this.age = 25;
}

resetForm(){
  this.name = 'iroman';
  this.age = 45;

  // document.querySelectorAll('h1')!.forEach(element => {
//   element.innerHTML = '<h1>Desde Angular</h1>'});


}


}
