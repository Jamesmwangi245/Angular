import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  @Output() notUseful = new EventEmitter<boolean> ();

  unwantedQuote(useful:boolean) {
    this.notUseful.emit(useful)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
