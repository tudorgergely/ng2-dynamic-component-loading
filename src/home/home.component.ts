import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {HelloWorldComponent} from './hello-world/hello-world.component.ts';

@Component({
    selector: 'home',
    template: `
        <button (click)="sayHello()">Say hello</button>
        <div>This is home</div>
    `
})
export class HomeComponent {
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
    }

    private sayHello() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(HelloWorldComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
}