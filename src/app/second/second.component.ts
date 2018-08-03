import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Output() changeValue = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onChangeValue(value: number) {
    this.changeValue.emit(value);
  }

}
