import {
    trigger,
    animate,
    transition,
    style,
    keyframes
} from '@angular/animations';

export const wild =
  trigger('wild', [
    transition(':enter', [
        style({
            position: 'relative',
            display: 'block',
        }),
        animate("5000ms", keyframes([
            style({
                transform: 'scale(0.2) rotate(90deg) skewY(-45deg)',
                boxShadow: '20px 0px 0px black',
                margin: 'auto',
            }),
            style({
                transform: 'scale(0.3) rotate(-90deg) skewY(-45deg)',
                boxShadow: '-20px 0px 20px black',
            }),
            style({
                transform: 'scale(0.7) rotate(-0deg) skewY(-45deg)',
                boxShadow: '20px 0px 0px black',
            }),
            style({
                transform: 'scale(0.9) rotate(-90deg) skewY(-45deg)',
                boxShadow: '-20px 0px 20px black',
            })
        ])),
    ])
  ]);