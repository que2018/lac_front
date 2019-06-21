import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fadeInOut} from '../../../animation/animation';
import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-edit',
	templateUrl: 'men-edit.component.html',
	animations: [fadeInOut]
})

export class MenEditComponent {
	
    @Input() public manInfo = [];
	
	constructor(private menService: MenService) {}
	
	ngOnInit() {
		
	}
}
