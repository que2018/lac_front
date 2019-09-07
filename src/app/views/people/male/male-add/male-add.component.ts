import {Component, EventEmitter, Input, Output, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {fadeInOut} from '../../../animation/animation';
import {MaleService} from '../../../../services/male.service';

@Component({
	selector: 'male-add',
	templateUrl: 'male-add.component.html',
	animations: [fadeInOut]
})

export class MaleAddComponent {
	
    @Output() public closeAddFlag = new EventEmitter();
	
	public manForm: FormGroup;

	constructor(
		private maleService: MaleService,
		private _formBuilder: FormBuilder
	) {}
	
	ngOnInit() {
		this.manForm = new FormGroup({
			username: new FormControl(''),
			firstname: new FormControl(''),
			lastname: new FormControl(''),
			dateAdded: new FormControl(''),
			status: new FormControl(0)
		});
	}
	
	addMaleInfo() {		
		var manInfo = {
			username: this.manForm.controls['username'].value,
			firstname: this.manForm.controls['firstname'].value,
			lastname: this.manForm.controls['lastname'].value,
			dateAdded: this.manForm.controls['dateAdded'].value,
			status: this.manForm.controls['status'].value
		}
	
		this.maleService.addMaleInfo(this.manForm.value).subscribe(
            returnData => {
                if(returnData.code === 200) {
                   this.closeAddFlag.emit(false);
                }
            },
            errorData => {
                console.log('===> add male info error: ' + errorData);
            }
        );
    }
	
	closeAdd() {
        this.closeAddFlag.emit(false);
    }
}
