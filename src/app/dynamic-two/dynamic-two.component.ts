import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-two',
  templateUrl: './dynamic-two.component.html',
  styleUrls: ['./dynamic-two.component.scss'],
})
export class DynamicTwoComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() klasa: string | undefined;
  @Input() color: string | undefined;
  @Input() background: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
