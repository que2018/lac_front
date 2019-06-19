
import {trigger, state, style, transition, animate} from '@angular/animations';

export const slideUp = trigger('slideUp', [
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1,
  })),
  transition('void => *', [
    style({
      transform: 'translateY(10%)',
      opacity: 0,
    }),
    animate(500)
  ]),
]);

export const slideDown = trigger('slideDown', [
  state('in', style({
    transform: 'translateY(0)',
    opacity: 1,
  })),
  transition('void => *', [
    style({
      transform: 'translateY(-10%)',
      opacity: 0,
    }),
    animate(500)
  ]),
]);

export const slideLeftRight = trigger('slideLeftRight', [
  state('in', style({
    transform: 'translateX(0)',
    opacity: '1',
  })),
  state('out', style({
    transform: 'translateX(-150%)',
    opacity: '0',
    display: 'none',
  })),
  transition('in <=> out', animate('0.5s ease')),
]);

// export const slideRightLeft = trigger('slideRightLeft', [
//   state('in', style({
//     transform: 'translateX(0)',
//     opacity: '1',
//   })),
//   state('out', style({
//     transform: 'translateX(10%)',
//     opacity: '0',
//     display: 'none',
//   })),
//   transition('in <=> out', animate('0.5s 1s ease')),
// ]);
//
export const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0})),
  state('void', style({ opacity: 0})),

  transition('void => in', animate('1s 500ms')), // delay 1s
  transition('in <=> out', animate('1s ease')),
]);

