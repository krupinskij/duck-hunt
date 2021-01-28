import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'duck',
    templateUrl: './duck.component.html',
    styleUrls: ['./duck.scss'],
    animations: [
        trigger('fly', [
            state('flyHorizontally', style({
                transform: 'translateX({{ X }}) translateY({{ Y }})'
            }), { params: { X: '100vh', Y: '100vh' }}),
            state('flyVertically', style({
                transform: 'translateX({{ X }}) translateY({{ Y }})'
            }), { params: { X: '100vh', Y: '100vh' }}),
            transition('* => *', animate('{{ speed }}'), { params: { speed: '5s'}}),
        ])
    ]
})
export class Duck {
    direction = 'flyHorizontally';
    X = '0';
    Y = '0';
    speed = this.calcSpeed;

    calculateNewPoint() {
        console.log("aaaa")
        if(this.direction === 'flyHorizontally') {
            this.direction = 'flyVertically';
            this.Y = Math.random() > 0.5 ? '100vh' : '0';
            this.X = `${Math.random() * 100}vw`;
            this.speed = this.calcSpeed;
        } else {
            this.direction = 'flyHorizontally';
            this.X = Math.random() > 0.5 ? '100vw' : '0';
            this.Y = `${Math.random() * 100}vh`;
            this.speed = this.calcSpeed;
        }
    }

    get calcSpeed(): string {
        return `${Math.random() * 3 + 1}s`;
    }
    
}