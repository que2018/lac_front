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
			username: new FormControl(''),
			firstname: new FormControl(''),
			lastname: new FormControl(''),
			dateAdded: new FormControl(''),
			status: new FormControl(0)
		});
	}
	
	saveMenInfo() {		
		var manInfo = {
			username: this.manForm.controls['username'].value,
			firstname: this.manForm.controls['firstname'].value,
			lastname: this.manForm.controls['lastname'].value,
			dateAdded: this.manForm.controls['dateAdded'].value,
			status: this.manForm.controls['status'].value
		}
	
		this.menService.saveMenInfo(this.manId, this.manForm.value).subscribe(
            returnData => {
                if(returnData.code === 200) {
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
                if (returnData.code === 200) {
                    var manInfo = returnData.data;	
										
					this.manForm.controls['username'].setValue(manInfo.username);
					this.manForm.controls['firstname'].setValue(manInfo.firstname);
					this.manForm.controls['lastname'].setValue(manInfo.lastname);
					this.manForm.controls['dateAdded'].setValue(manInfo.dateAdded);
					this.manForm.controls['status'].setValue(manInfo.status);
                }
            },
            errorData => {
                console.log('===> get men info error: ' + errorData);
            }
        );
    }
}
