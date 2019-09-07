import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {slideLeftRight, slideUp} from '../../../animation/animation';

import {MaleService} from '../../../../services/male.service';

@Component({
	selector: 'male-list',
	templateUrl: 'male-list.component.html',
	styleUrls: ['./male-list.component.css'],
	animations: [slideUp, slideLeftRight]
})

export class MaleListComponent {
	
	public male;
	public totalNum = 0;
	public totalPage = 0;
	
	public paginationOptions = {};

	public animateFlag: String = 'in';
	public showAddFlag: Boolean = false;
	public showEditFlag: Boolean = false;
	public showListFlag: Boolean = true;
	
	public selectedManId = 0;
	
	@Input() public filterOptions: Array<any>;
	
	constructor(private maleService: MaleService) {}
	
	ngOnInit() {		
		this.getMaleList();
	}
	
	private getMaleList() {
        this.maleService.getMaleList(this.filterOptions).subscribe(
            returnData => {
                if ( returnData.code === 200 ) {
                    this.male = returnData.data.list;
					
					this.paginationOptions = {};
					this.paginationOptions['current_page'] = 1;
					this.paginationOptions['total_page'] = returnData.total_page;
					this.paginationOptions['total_num'] = returnData.total_num;
                }
            },
            errorData => {
                console.log('===> get male list error: ' + errorData);
            }
        );
    }
	
	showAdd() {
		this.animateFlag = 'out';
        this.showAddFlag = true;
		this.showEditFlag = false;
		this.showListFlag = false;
    }
	
	showEdit(selectedManId: number) {
        this.showEditFlag = true;
		this.showListFlag = false;
		this.selectedManId = selectedManId;
    }
	
	closeAdd($event) {
		this.showAddFlag = false;
        this.showEditFlag = false;
		this.showListFlag = true;
		
		this.getMaleList();
    }
	
	closeEdit($event) {
		this.showAddFlag = false;
        this.showEditFlag = false;
		this.showListFlag = true;
		
		this.getMaleList();
    }
}
