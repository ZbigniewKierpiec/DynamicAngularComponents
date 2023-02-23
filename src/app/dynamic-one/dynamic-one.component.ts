import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-one',
  templateUrl: './dynamic-one.component.html',
  styleUrls: ['./dynamic-one.component.scss'],
})
export class DynamicOneComponent implements OnInit, OnChanges {
  @Input() name: string | undefined;
  @Input() klasa: string | undefined;
  @Input() color: string | undefined;
  @Input() background: string | undefined;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('Changes Happened!!');
  }
}
