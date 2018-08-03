import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Output() changeValue = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onChangeValue(value: number) {
    this.changeValue.emit(value);
  }

}
