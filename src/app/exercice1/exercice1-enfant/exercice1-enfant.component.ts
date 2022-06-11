import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur?: number = 0;
  @Output() public updateCompteur = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addOne() {
    this.compteur += 1;
    this.updateCompteur.emit(this.compteur);
  }

  reduceOne() {
    if (this.compteur > 0) {
      this.compteur -= 1;
    }

    this.updateCompteur.emit(this.compteur);
  }
}
