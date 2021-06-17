// https://github.com/cornflourblue/angular-8-animation-example
import { trigger, animate, transition, style, keyframes } from '@angular/animations';

export const slideLeft =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideLeft', [

        transition(':enter', [
        style({
            opacity: 0,
            position: 'relative',
        }),
        animate("300ms", keyframes([
            style({ opacity: 0.3, right: '-100%' }),
            style({ opacity: 0.6, right: '-50%' }),
            style({ opacity: 0.9, right: '-25%' }),
            style({ opacity: 1, right: '0%' }),
        ])),

    ])
]);
