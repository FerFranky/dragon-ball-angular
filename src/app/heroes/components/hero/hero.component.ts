import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'ironman'
  public age: number = 45

  get capitalizedName(): string {
    return this.name.toUpperCase()
  }

  heroDescription(): string {
    return `${this.name} ${this.age}`
  }

  changeHero(): void {
    this.name = 'Hulk'
  }

  changeAge(): void {
    this.age = 29
  }
}
