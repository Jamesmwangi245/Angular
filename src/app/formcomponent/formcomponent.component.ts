import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {



Votes:number = 0;
likeButtonClick() {
  this.Votes++;
}
dislikeVote = 0
dislikeButtonClick() {
  this.dislikeVote++;
} 

  constructor() { }

  ngOnInit(): void {
  }

}
