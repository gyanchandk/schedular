import { Component,OnInit } from '@angular/core';
//import { Day} from './day';
import * as moment from "moment" ;

class Day{
     day:string;
     month:string;
     available:boolean;

     constructor(d:string,m:string,availStatus:boolean){
         this.day=d;
         this.month=m;
         this.available=availStatus;

     }
}

 
@Component({
  selector: 'app-root',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent implements OnInit{
  
     days:Day[]=[];
    
     currDateDay:string[]=[];
     start:number=0;
    startDate:string;
    startDateY:string;
    endDate:string;
    endDateY:string;
     
     displayCalender(){

      this.startDate = moment().add(this.start,'d').format('D MMMM');
      this.startDateY=moment().add(this.start,'d').format(',YYYY');

      this.endDate = moment().add(this.start+34,'d').format('D MMMM');
      this.endDateY=moment().add(this.start+34,'d').format(',YYYY');
      for(let i=this.start;i<=this.start+6;i++)
      {
         let currDay = moment().add(i, 'd').format('dddd');
          console.log(currDay);
         this.currDateDay.push(currDay); 
      }
      
     
      for (let i=this.start;i<=this.start+34;i++){

        console.log("method is called");
         let month=moment().add(i, 'd').format('MMM');
         let day =moment().add(i, 'd').format('D');
         let availability="available";

         this.days.push(new Day(day,month,false))
         
      }

      this.days[0].available=true;
      this.days[12].available=true;

     }

     goToNextStartDate(){
       this.days=[];
       this.currDateDay=[];
       console.log(this.days);
       this.start=this.start+35;
       this.displayCalender();
     }

     goToBackStartDate(){
        this.days=[];
       this.start=this.start-35;
       this.displayCalender();
     }

   

     ngOnInit(){
       this.displayCalender();
     }

}
