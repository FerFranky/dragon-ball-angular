import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public heroNemes: string [] = [
    'Spiderman', 'Hulk', 'Capitan America', 'Ironman', 'Antman'
  ]
  public deletedHero?: string

  removeLastHero (): void {
    this.deletedHero = this.heroNemes.pop()
  }
}
