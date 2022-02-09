import { Component, OnInit } from '@angular/core';

import { Quotes } from '../quotes';
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {
  


  Rules:Quotes[] = [
    new Quotes(1,'Make peace with your pastso that it wont screw up the present','by Old Man', new Date ('2022,02,05') ),
    new Quotes(2,'What others think of you is none of your business','by Raj Sanchez', new Date ('2022,02,05') ),
    new Quotes(3,'Time heals almost everything,give it time','by Meshak Ying', new Date ('2022,02,05') ),
    new Quotes(4,'Do not compare your life to others and do not judge them','by Shakes Spears', new Date ('2022,02,05') ),
    new Quotes(5,'Stop thinking too much,it is alright not to know the answer','by Ministry of Education', new Date ('2022,02,05') ),
    new Quotes(6,'No one is in charge of your happiness ,except you','by Research of Pyschologist', new Date ('2022,02,05') ),
    new Quotes(7,'If the world turns its back on you,son also turn your back onto the world,the world is never fair ','by Me', new Date ('2022,02,05') ),
  ]
   

  Votes:number = 0;
  likeButtonClick() {
    this.Votes++;
  }
  dislikeVote = 0
  dislikeButtonClick() {
    this.dislikeVote++;
  }
  toggle:boolean = false

  onToggle(){
    
      this.toggle = !this.toggle
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
