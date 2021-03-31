import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit {
  tempList:any=[];
  tempListArr: any = [];
  selectedThreshold: string = '';

  tempclist:any=[];
  tempflist:any=[];
 
    currentBP:any;
    fToCel: any;
    cToFahr: any;
    bp: any;
    fP: any;
    temperature: any;
    bpValue: any;
    fpValue:any;
    temp:any;
    fTemp: any;
    cTemp: any;
    bPTemp:any;
    newFP: any;
    newBP:any;
    valueDiff: any;
    valDiff: any;
    difference:any;
    thresholdValue: any = 0;
    boilingPoint:any;
    freezingPoint:any;
   


  constructor(private _form: FormsModule) {
   
    }

  ngOnInit(): void {

  }

  showTemp():any{
    this.bpValue = this.bp;
    this.fpValue = this.fP;
    this.temp = this.temperature;
    if(typeof this.bpValue != 'undefined' &&  this.bpValue !== ''){
      this.newBP = this.bp; 
    }
    
  
  if(this.fpValue != '' && typeof this.fpValue != 'undefined'){
    this.newFP = this.fP; 
  }
    if(this.temperature.substr(this.temperature.length - 1) == 'F'){
      this.fToC(this.temperature);
     
      
    }if(this.temperature.substr(this.temperature.length - 1) == 'C'){
      this.cToF(this.temperature);
    }

    if(this.selectedThreshold == "boilingPoint"){

      if(this.newBP.slice(-1) == 'C'){
      if(this.tempclist[this.tempclist.length - 1]>this.newBP.slice(0,-1)){
          if(this.tempclist.length>1){
          
            this.difference = this.tempclist[this.tempclist.length - 1] - this.tempclist[this.tempclist.length - 2];
             this.valDiff = this.difference.toPrecision(3);
          
            if(Math.abs(this.valDiff)>=0.5){
              alert('Temperature is greater than Boiling Point by ' +this.valDiff)
            }
          } else
          {
            alert('Temperature is greater than Boiling Point by '+ 
            (this.tempclist[this.tempclist.length - 1] - this.newBP.slice(0,-1)))
          }
          
        }else{
          alert("Temperature is normal");
        }
      }
     if(this.newBP.slice(-1) == 'F'){
    
        if(this.tempflist[this.tempflist.length - 1]>this.newBP.slice(0,-1)){
            if(this.tempflist.length>1){
            
              this.difference = this.tempflist[this.tempflist.length - 1] - this.tempflist[this.tempflist.length - 2];
               this.valDiff = this.difference;;
               console.log(this.valDiff);
            
              if(Math.abs(this.valDiff)>=0.5){
                alert('Temperature is greater than Boiling Point by ' 
                +(this.tempflist[this.tempflist.length - 1] - this.newBP.slice(0,-1)))
              }
            } else
            {
              alert('Temperature is greater than Boiling Point by '+ 
              (this.tempflist[this.tempflist.length - 1] - this.newBP.slice(0,-1)))
            }
            
          }else{
            alert("Temperature is normal");
          }
        
    } 
  }





    if(this.selectedThreshold == "freezingPoint"){

      if(this.newFP.slice(-1) == 'F'){
      if(this.tempflist[this.tempflist.length - 1] <  this.newFP.slice(0,-1)){
          if(this.tempflist.length>1){
          
            this.difference = this.tempflist[this.tempflist.length - 1] - this.tempflist[this.tempflist.length - 2];
           this.valDiff = this.difference.toPrecision(3);
          
            if(Math.abs(this.valDiff)>=0.5){
              alert('Temperature is lower than Freezing Point by ' 
              +(this.newFP.slice(0,-1) - this.tempflist[this.tempflist.length - 1]))
            }
           
          }
          else
          {
            alert('Temperature is lower than Freezing Point by '+ 
            (this.newFP.slice(0,-1) - this.tempflist[this.tempflist.length - 1]));
          }
        }else{
          alert("Temperature is normal");
        }
        
        
      }

    

    if(this.newFP.slice(-1) == 'C'){
      if(this.tempclist[this.tempclist.length - 1]> this.newFP.slice(0,-1)){
          if(this.tempclist.length>1){
          
            this.difference = this.tempclist[this.tempclist.length - 1] - this.tempclist[this.tempclist.length - 2];
           this.valDiff = this.difference.toPrecision(3);
          
            if(Math.abs(this.valDiff)>=0.5){
              alert('Temperature is lower than Freezing Point by ' 
              +(this.newFP.slice(0,-1) - this.tempclist[this.tempclist.length - 1]))
            }
           
          }  else
          {
            alert('Temperature is lower than Freezing Point by '+ 
            (this.newFP.slice(0,-1) - this.tempclist[this.tempclist.length - 1]));
          }
        }else{
          alert("Temperature is normal");
        }
        
        
      }

    }
  
    
  
   
}

  fToC(fahrenheit) {
  this.fTemp = fahrenheit.slice(0,-1);
 this.fToCel = (this.fTemp - 32) * 5 / 9;
  let message = 'Temperature is ' + this.fTemp+'\xB0F /' + this.fToCel.toPrecision(3) + '\xB0C.';
  //this.compareValue(this.newBP,this.newFP);
  alert(message);
  this.tempflist.push(this.fTemp);
  this.tempclist.push(this.fToCel.toPrecision(3))

    
    
} 

cToF(celsius){
  this.cTemp = celsius.slice(0,-1);
  this.cToFahr = this.cTemp * 9 / 5 + 32;
  let message = 'Temperature is' + this.cTemp+'\xB0C is /' + this.cToFahr.toPrecision(3) + '\xB0F.';
  //this.compareValue(this.newBP,this.newFP);
  alert(message);
  this.tempclist.push(this.cTemp);
  this.tempflist.push(this.cToFahr.toPrecision(3));
  
}

// compareValue(BP: any, FP: any){
// if(typeof BP !== 'undefined'){

//   this.bPTemp = BP.slice(0,-1);
//   if(BP !== ''){
//     if(BP.slice(-1) == 'F' && this.fTemp>this.bPTemp){
      
//       this.valueDiff = (this.fTemp - this.bPTemp);
//       alert('Temperature is greater than Boiling Point by ' +this.valueDiff)
//     }else{
//       alert("Temperature is normal");
//     }
//   }
  
//   } 

//   if(typeof FP !=='undefined'){
//     let FrPointTemp = FP.slice(0,-1);
//     if(FP != ''){
//       if(FP.slice(-1) == 'F' && this.fTemp<FrPointTemp){
        
//         this.valueDiff =  this.fTemp - FrPointTemp;
//         alert('Temperature is lower than Freezing Point by ' +this.valueDiff)
//       }
//     }
//   }
// }


  
    selectThreshold (event: any) {

    this.selectedThreshold = event.target.value;
    
  
  
  }

    
  
 
 
  
  
 
  
}






