"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.slideUp = animations_1.trigger('slideUp', [
    animations_1.state('in', animations_1.style({
        transform: 'translateY(0)',
        opacity: 1,
    })),
    animations_1.transition('void => *', [
        animations_1.style({
            transform: 'translateY(10%)',
            opacity: 0,
        }),
        animations_1.animate(500)
    ]),
]);
exports.slideDown = animations_1.trigger('slideDown', [
    animations_1.state('in', animations_1.style({
        transform: 'translateY(0)',
        opacity: 1,
    })),
    animations_1.transition('void => *', [
        animations_1.style({
            transform: 'translateY(-10%)',
            opacity: 0,
        }),
        animations_1.animate(500)
    ]),
]);
exports.slideLeftRight = animations_1.trigger('slideLeftRight', [
    animations_1.state('in', animations_1.style({
        transform: 'translateX(0)',
        opacity: '1',
    })),
    animations_1.state('out', animations_1.style({
        transform: 'translateX(-150%)',
        opacity: '0',
        display: 'none',
    })),
    animations_1.transition('in <=> out', animations_1.animate('0.5s ease')),
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
exports.fadeInOut = animations_1.trigger('fadeInOut', [
    animations_1.state('in', animations_1.style({ opacity: 1 })),
    animations_1.state('out', animations_1.style({ opacity: 0 })),
    animations_1.state('void', animations_1.style({ opacity: 0 })),
    animations_1.transition('void => in', animations_1.animate('1s 500ms')),
    animations_1.transition('in <=> out', animations_1.animate('1s ease')),
]);
