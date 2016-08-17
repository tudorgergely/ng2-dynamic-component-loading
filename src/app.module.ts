import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeModule} from './home/home.module.ts';
import {AppComponent} from './app.component.ts';

@NgModule({
    imports: [BrowserModule, HomeModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}