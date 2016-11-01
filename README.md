# Toggle for Angular 2

[Demo](https://plnkr.co/edit/St8h9QiMgoLINyNwZELj?p=preview)

Toggle between the toggle component and the toggle directive.

```ts
import { Component } from '@angular/core';
import { ToggleComponent, ToggleDirective } from 'ng2-toggle';

@Component({
  directives: [ ToggleComponent, ToggleDirective ],
  template: `
    <toggle #toggler>
      <p>Toggled!</p>
    </toggle>
    <p *toggle="toggler">Click the button below to toggle.</p>
    <button type="button" (click)="toggler.toggle()">Toggle</button>
  `
})
export class DemoComponent {}
```

Toggle from the component and subscribe to the toggle change event.

```ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToggleComponent, ToggleDirective } from 'ng2-toggle';

@Component({
  directives: [ ToggleComponent, ToggleDirective ],
  template: `
    <toggle #toggler>
      <p>Toggled!</p>
    </toggle>
    <p *toggle="toggler">Click the button below to toggle.</p>
    <button type="button" (click)="toggle()">Toggle</button>
  `
})
export class DemoComponent implements OnInit {
  @ViewChild('toggler')
  toggler: ToggleComponent;
  ngOnInit() {
    this.toggler.change.subscribe(on => console.log(on));
  }
  toggle() {
    this.toggler.toggle();
  }
}
```
