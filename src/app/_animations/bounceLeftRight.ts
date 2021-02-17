import {
    trigger,
    animate,
    transition,
    style,
    keyframes
} from '@angular/animations';

export const bounceLeftRight =
  trigger('bounceLeftRight', [
    transition(':enter', [
        style({
            opacity: 0,
            position: 'relative',
        }),
        animate("750ms", keyframes([
            style({ opacity: 0.2, right: '-2%' }),
            style({ opacity: 0.8, right: '2%' }),
            style({ opacity: 0.9, right: '-1%' }),
            style({ opacity: 0.95, right: '1%' }),
            style({ opacity: 1, right: '0%' })
        ]))
    ])
  ]);