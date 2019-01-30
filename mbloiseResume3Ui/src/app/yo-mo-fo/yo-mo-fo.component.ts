import {Component} from '@angular/core';

@Component({
  selector: 'yo-mo-fo',
  templateUrl: './yo-mo-fo.component.html'
})
export class YoMoFoComponent {
  name: string;

  constructor() {
    this.name = 'mon vieux!';
  }
}
