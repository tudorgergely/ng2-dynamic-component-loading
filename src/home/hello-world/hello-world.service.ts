import {Injectable} from '@angular/core';

@Injectable()
export class HelloWorldService {
    private answerToEverything:number = 42;

    giveMeTheAnswer():number {
        return this.answerToEverything;
    }
}