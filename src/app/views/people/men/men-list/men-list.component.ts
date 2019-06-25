import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {slideLeftRight, slideUp} from '../../../animation/animation';

import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-list',
	templateUrl: 'men-list.component.html',
	styleUrls: ['./men-list.component.css'],
	animations: [slideUp, slideLeftRight]
})

export class MenListComponent {
	
	public men;
	public totalNum = 0;
	public totalPage = 0;
	
	public paginationOptions = {};

	public animateFlag: String = 'in';
	public showAddFlag: Boolean = false;
	public showEditFlag: Boolean = false;
	
	public selectedManId = 0;
	
	@Input() public filterOptions: Array<any>;
	
	constructor(private menService: MenService) {}
	
	ngOnInit() {		
		this.getMenList();
	}
	
	private getMenList() {
        this.menService.getMenList(this.filterOptions).subscribe(
            returnData => {
                if ( returnData.code === 1000 ) {
                    this.men = returnData.men_list;
					
					this.paginationOptions = {};
					this.paginationOptions['current_page'] = 1;
					this.paginationOptions['total_page'] = returnData.total_page;
					this.paginationOptions['total_num'] = returnData.total_num;
                }
            },
            errorData => {
                console.log('===> get men list error: ' + errorData);
            },
            () => {
                this._setPaginationOptions();
            }
        );
    }
	
	showAdd() {
		this.animateFlag = 'out';
        this.showAddFlag = true;
    }
	
	showEdit(selectedManId: number) {
		this.animateFlag = 'out';
        this.showEditFlag = true;
		this.selectedManId = selectedManId;
    }
}
