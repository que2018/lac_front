import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {fadeInOut} from '../../../animation/animation';
import {MaleService} from '../../../../services/male.service';

@Component({
	selector: 'male-add',
	templateUrl: 'male-add.component.html',
	animations: [fadeInOut]
})

export class MaleAddComponent {
	
    @Input() public manInfo = [];
	
	constructor(private maleService: MaleService) {}
	
	ngOnInit() {
		
	}
}
