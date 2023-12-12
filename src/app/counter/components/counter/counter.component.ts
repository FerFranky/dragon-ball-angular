import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <button (click)="increseBy(10)">+10</button>
    <button (click)="reset(10)">Reset</button>
    <button (click)="increseBy(-10)">-10</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increseBy(value: number): void {
    this.counter += value;
  }

  reset(value: number): void {
    this.counter = 10;
  }
}
