import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MenService} from '../../../../services/men.service';

@Component({
	selector: 'men-add',
	templateUrl: 'men-add.component.html'
})

export class MenAddComponent {
	
	public menList;
	public totalNum = 0;
	public totalPage = 0;
	
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
}
