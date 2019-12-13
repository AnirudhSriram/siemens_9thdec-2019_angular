import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  tempRating: number;
  fractionPresent: boolean;
  fractionAvailable: boolean;

  constructor() { }

  ngOnInit() {
    console.log("here we are",this.rating);
    this.convertRatingToStars();
  }
  @Input() rating;
  ratingInStars:number[] = [] ;
  convertRatingToStars = () => {
    console.log("inside")
    this.tempRating = this.rating;
    for(let i=0;i<Math.floor(this.tempRating);i++){
      this.ratingInStars.push(1);
    }
    this.fractionAvailable = (this.tempRating - Math.floor(this.tempRating))>0?true:false;

  }
  
}
