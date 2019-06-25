
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {isUndefined} from 'util';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() public paginationOptions;
  @Output() public selectedPageNum = new EventEmitter();

  public currentPage: number;
  public lastPage: number;
  public totalNum: number;
  public showPrevGroup: Boolean = false;
  public showNextGroup: Boolean = true;

  public pageLists: Array<number>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( isUndefined(this.paginationOptions.current_page) || isUndefined(this.paginationOptions.total_page) ) {
      // For Debug
      // console.log('===>this.paginationOptions is undefined.');
    } else {
      for (const propName in changes ) {
        if ( propName === 'paginationOptions' ) {
          this._buildPagination();
        }
      }
    }
  }

  private _buildPagination() {
    let startNum = 1;
    let endNum = 1;

    // For Debug
    // console.log(this.paginationOptions.current_page);

    this.currentPage = this.paginationOptions.current_page;
    this.lastPage = this.paginationOptions.total_page;
    this.totalNum = this.paginationOptions.total_num;

    if ( this.currentPage > 5 ) {
      startNum = this.currentPage - 4;
    }

    if ( startNum === 1 ) {
      if ( this.lastPage <= 9 ) {
        endNum = this.lastPage;
      } else {
        endNum = 9;
      }
    } else {
      if ( this.lastPage <= (this.currentPage + 4) ) {
        endNum = this.lastPage;
      } else {
        endNum = this.currentPage + 4;
      }
    }

    this.pageLists = [];
    for ( let item = startNum; item <= endNum; item++ ) {
      this.pageLists.push(item);
    }

    if ( this.currentPage === 1 ) {
      this.showPrevGroup = false;
    } else {
      this.showPrevGroup = true;
    }

    if ( this.currentPage === this.lastPage ) {
      this.showNextGroup = false;
    } else {
      if ( this.lastPage === 0 ) {
        this.showNextGroup = false;
      } else {
        this.showNextGroup = true;
      }
    }

    // For Debug
    // console.log('===> Pagination Section: ' + JSON.stringify(this.paginationOptions));
  }

  selectedPage(pageNum: number) {
    this.selectedPageNum.emit(pageNum);
  }

  goToPrevPage() {
    this.selectedPageNum.emit((this.currentPage - 1));
  }

  goToNextPage() {
    this.selectedPageNum.emit((this.currentPage + 1));
  }

  goToFirstPage() {
    this.selectedPageNum.emit(1);
  }

  goToLastPage() {
    this.selectedPageNum.emit(this.lastPage);
  }
}
