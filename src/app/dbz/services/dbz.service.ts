import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push({ id: uuid(), ...character });
  }

  onDeleteCharacter(characterToDelete: Character): void {
    // console.log('characterId');
    // console.log(characterId);
    // this.characters.splice(characterId, 1);
    this.characters = this.characters.filter(character => character.id !== characterToDelete.id)
  }
}
