import { Component, Input, OnInit } from '@angular/core';
import { Results } from 'src/app/models/resources.interface';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss']
})
export class OrderByComponent implements OnInit {
  @Input() resources?: Results[];
  currentValue: number = 1;
  filterList = [
    { id: 1, value: 'First chapter'},
    { id: 2, value: 'Last chapter'},
    { id: 3, value: 'Name A-Z'},
    { id: 4, value: 'Name Z-A'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  orderBy($event: string){
    this.currentValue = Number($event);
    switch($event){
      case '1':
        this.sortItemsChapterAsc();
        break;
      case '2':
        this.sortItemsChapterDesc();
        break;
      case '3':
        this.sortItemsByNameAz();
        break;
      case '4':
        this.sortItemsByNameZa();
        break;
    }
  }
  sortItemsChapterAsc() {
    this.resources?.sort((a, b) => a.id - b.id);
  }

  sortItemsChapterDesc() {
    this.resources?.sort((a, b) => b.id - a.id);
  }

  sortItemsByNameAz() {
    this.resources?.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortItemsByNameZa() {
    this.resources?.sort((a, b) => b.name.localeCompare(a.name));
  }

}
