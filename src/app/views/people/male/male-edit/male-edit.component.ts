import {Component, EventEmitter, Input, Output, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {fadeInOut} from '../../../animation/animation';
import {MaleService} from '../../../../services/male.service';

@Component({
	selector: 'male-edit',
	templateUrl: 'male-edit.component.html',
	animations: [fadeInOut]
})

export class MaleEditComponent {
	
    @Input() public manId = 0;
	@Output() public closeEditFlag = new EventEmitter();
	
	public manForm: FormGroup;
	
	public manInfo = {};

	constructor(
		private maleService: MaleService,
		private _formBuilder: FormBuilder
	) {}
	
	ngOnInit() {
		this.getMaleInfo();
		
		this.manForm = new FormGroup({
			username: new FormControl(''),
			firstname: new FormControl(''),
			lastname: new FormControl(''),
			dateAdded: new FormControl(''),
			status: new FormControl(0)
		});
	}
	
	saveMaleInfo() {		
		var manInfo = {
			username: this.manForm.controls['username'].value,
			firstname: this.manForm.controls['firstname'].value,
			lastname: this.manForm.controls['lastname'].value,
			dateAdded: this.manForm.controls['dateAdded'].value,
			status: this.manForm.controls['status'].value
		}
	
		this.maleService.saveMaleInfo(this.manId, this.manForm.value).subscribe(
            returnData => {
                if(returnData.code === 200) {
                   this.closeEditFlag.emit(false);
                }
            },
            errorData => {
                console.log('===> save male info error: ' + errorData);
            }
        );
    }
	
	closeEdit() {
        this.closeEditFlag.emit(false);
    }
	
	private getMaleInfo() {
        this.maleService.getMaleInfo(this.manId).subscribe(
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
                console.log('===> get male info error: ' + errorData);
            }
        );
    }
}
