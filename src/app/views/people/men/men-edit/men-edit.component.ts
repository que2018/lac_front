import {Component, EventEmitter, Input, Output, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {fadeInOut} from '../../../animation/animation';
import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-edit',
	templateUrl: 'men-edit.component.html',
	animations: [fadeInOut]
})

export class MenEditComponent {
	
    @Input() public manId = 0;
	@Output() public closeEditFlag = new EventEmitter();
	
	public manForm: FormGroup;
	
	public manInfo = {};

	constructor(
		private menService: MenService,
		private _formBuilder: FormBuilder
	) {}
	
	ngOnInit() {
		this.getMenInfo();
		
		this.manForm = new FormGroup({
			name: new FormControl(''),
			date_added: new FormControl(''),
			status: new FormControl(0)
		});
	}
	
	saveMenInfo() {		
		var manInfo = {
			name: this.manForm.controls['name'].value,
			date_added: this.manForm.controls['date_added'].value,
			status: this.manForm.controls['status'].value
		}
	
		this.menService.saveMenInfo(this.manForm.value).subscribe(
            returnData => {
                if(returnData.code === 1000) {
                   this.closeEditFlag.emit(false);
                }
            },
            errorData => {
                console.log('===> save men info error: ' + errorData);
            }
        );
    }
	
	closeEdit() {
        this.closeEditFlag.emit(false);
    }
	
	private getMenInfo() {
        this.menService.getMenInfo(this.manId).subscribe(
            returnData => {
                if ( returnData.code === 1000 ) {
                    var manInfo = returnData.man_info;
					
					this.manForm.controls['name'].setValue(manInfo.name);
					this.manForm.controls['date_added'].setValue(manInfo.date_added);
					this.manForm.controls['status'].setValue(manInfo.status);
                }
            },
            errorData => {
                console.log('===> get men info error: ' + errorData);
            }
        );
    }
}
