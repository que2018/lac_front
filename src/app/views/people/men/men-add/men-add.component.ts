import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {fadeInOut} from '../../../animation/animation';
import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-add',
	templateUrl: 'men-add.component.html',
	animations: [fadeInOut]
})

export class MenAddComponent {
	
    @Input() public manInfo = [];
	
	constructor(private menService: MenService) {}
	
	ngOnInit() {
		
	}
}
