import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {fadeInOut} from '../../../animation/animation';
import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-edit',
	templateUrl: 'men-edit.component.html',
	animations: [fadeInOut]
})

export class MenEditComponent {
	
    @Input() public manId = 0;
	
	private manInfo = {
		name: "", 
		status: 0
	};

	constructor(private menService: MenService) {}
	
	ngOnInit() {
		this.getMenInfo();
	}
	
	saveMenInfo() {
		this.menService.saveMenInfo(this.manInfo).subscribe(
            returnData => {
                if ( returnData.code === 1000 ) {
                   
                }
            },
            errorData => {
                console.log('===> save men info error: ' + errorData);
            },
            () => {
                //this._setPaginationOptions();
            }
        );
    }
	
	private getMenInfo() {
        this.menService.getMenInfo(this.menId).subscribe(
            returnData => {
                if ( returnData.code === 1000 ) {
                    this.manInfo = returnData.man_info;
                }
            },
            errorData => {
                console.log('===> get men info error: ' + errorData);
            },
            () => {
                //this._setPaginationOptions();
            }
        );
    }
}
