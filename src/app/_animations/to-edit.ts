import { trigger, animate, transition, style, keyframes } from '@angular/animations';

export const toEdit =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('to-edit', [

    transition(':enter', [
      style({
        // TODO
        // a simple example would be to set opacity to 0 here
      }),
      animate('300ms', keyframes([
        style({ /* TODO */ }),
        // following the opacity: 0 example, you could have the opacity increase to 1 here
        // this would create a fade-in effect
        // use as many style() calls as needed for your animation
        style({ /* TODO */ }),
        style({ /* TODO */ }),
        style({ /* TODO */ }),
      ])),

    ])
  ]);
