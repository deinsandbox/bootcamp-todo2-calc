import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calc';
  first: number = 0;
  second: number = 0;
  result: number = 0;

  setFirst(value: number) {
    this.first = value;
    this.setResult();
  }

  setSecond(value: number) {
    this.second = value;
    this.setResult();
  }

  setResult() {
    console.log(`First ${this.first} Type ${typeof this.first}`);
    console.log(`Second ${this.second} Type ${typeof this.second}`);
    this.result = this.first + this.second;
  }
}
