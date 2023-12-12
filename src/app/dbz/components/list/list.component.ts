import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public deletedId: EventEmitter<Character> = new EventEmitter()

  onDeleteCharacter(character: Character):void {
    this.deletedId.emit(character)
  }
}
