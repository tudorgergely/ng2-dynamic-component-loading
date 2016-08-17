import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component.ts';
import {HelloWorldComponent} from './hello-world/hello-world.component.ts';
import {HelloWorldService} from './hello-world/hello-world.service.ts';

@NgModule({
    declarations: [HomeComponent, HelloWorldComponent],
    entryComponents: [HelloWorldComponent],
    providers: [HelloWorldService],
    exports: [HomeComponent]
})
export class HomeModule {
}