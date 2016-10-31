import {
  Component, Directive, EventEmitter, Input, TemplateRef, ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'toggle',
  template: `
    <div *ngIf="on">
      <ng-content></ng-content>
    </div>
  `
})
export class ToggleComponent {
  on: boolean;
  change: EventEmitter<boolean>;
  constructor() {
    this.change = new EventEmitter<boolean>();
    this.on = false;
  }
  toggle() {
    this.on = !this.on;
    this.change.emit(!this.on);
  }
}

@Directive({
  selector: '[toggle]'
})
export class ToggleDirective {
  @Input() set toggle(toggle: ToggleComponent) {
    if (!toggle.on) this.show();
    toggle.change.subscribe(on => {
      if (on) this.show();
      else this.hide();
    });
  }
  constructor(
    private template: TemplateRef<ViewContainerRef>,
    private viewContainer: ViewContainerRef
  ) {}
  private hide() {
    this.viewContainer.clear();
  }
  private show() {
    this.viewContainer.createEmbeddedView(this.template);
  }
}
