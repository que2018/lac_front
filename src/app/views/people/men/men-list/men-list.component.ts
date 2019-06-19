import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {slideLeftRight, slideUp} from '../../../animation/animation';

import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-list',
	templateUrl: 'men-list.component.html',
	animations: [slideUp, slideLeftRight]
})

export class MenListComponent {
	
	public menList;
	public totalNum = 0;
	public totalPage = 0;
	
	public animateFlag: String = 'in';
	public showEditFlag: Boolean = false;
	
	@Input() public filterOptions: Array<any>;
	
	constructor(private menService: MenService) {}
	
	ngOnInit() {		
		this.getMenList();
	}
	
	private getMenList() {
        this.menService.getMenList(this.filterOptions).subscribe(
            returnData => {
                if ( returnData.code === 1000 ) {
                    this.menList = returnData.men_list;
                }
            },
            errorData => {
                console.log('===> get men list error: ' + errorData);
            },
            () => {
                //this._setPaginationOptions();
            }
        );
    }
	
	showEdit(selectedCustomerData: Array<any>) {
		this.animateFlag = 'out';
        this.showEditFlag = true;
    }
}
