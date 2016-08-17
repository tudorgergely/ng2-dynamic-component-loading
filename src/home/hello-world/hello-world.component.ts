import {Component, AfterViewInit} from '@angular/core';
import {HelloWorldService} from './hello-world.service.ts';

@Component({
    selector: 'hello-world',
    template: `
        <div>
            Hello, world!, {{name}}
            The answer is: {{getAnswer()}}
        </div>
    `
})
export class HelloWorldComponent implements AfterViewInit {
    private name:string = 'You';

    constructor(private helloWorldService: HelloWorldService) {
    }

    ngAfterViewInit(): void {
        this.name = 'Me';
    }

    private getAnswer() {
        return this.helloWorldService.giveMeTheAnswer();
    }
}