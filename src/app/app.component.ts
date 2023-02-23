import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { async } from '@angular/core/testing';
import { DynamicOneComponent } from './dynamic-one/dynamic-one.component';
import { DynamicTwoComponent } from './dynamic-two/dynamic-two.component';

const componentsConfig = [
  {
    component: () =>
      import('../app/dynamic-one/dynamic-one.component').then(
        (pr) => pr.DynamicOneComponent
      ),
    inputs: {
      name: 'Button 1',
      klasa: 'zee',
      color: 'white',
      background: 'green',
    },
  },

  {
    component: () =>
      import('../app/dynamic-two/dynamic-two.component').then(
        (pr) => pr.DynamicTwoComponent
      ),
    inputs: {
      name: 'Button 2',
      klasa: 'zee',
      color: 'white',
      background: 'red',
    },
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  createConfigComponents() {
    componentsConfig.forEach(async (componentsConfig) => {
      this.container.clear();
      const compInsta = await componentsConfig.component();
      const componentRef = this.container.createComponent(compInsta);
      Object.entries(componentsConfig.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });
    });
  }

 
}
