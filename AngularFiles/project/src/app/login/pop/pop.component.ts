import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { Serializer } from '@angular/compiler';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  

  constructor(private matDialogref:MatDialogRef<PopComponent[]>,private service:SharedService,@Inject (MAT_DIALOG_DATA) public data:any) { }
  @Input() res:any;
  SNo:number|any;
  Hotel!:string;
   Arrival!:string;
  Departure!:string;
  Type!: string;
  Guests!:number;
  Price!:number;
  reserveForm : any;
 
  onClose(){
    this.matDialogref.close()
  }
  ngOnInit(): void {
    this.reserveForm = new FormGroup({
      SNo: new FormControl(''),
      Hotel: new FormControl(''),
      Arrival:new FormControl(''),
      Departure:new FormControl(''),
      Type: new FormControl(''),
      Guests:new FormControl(''),
      Price:new FormControl('')
    });
    if(this.data){
    let Adate = this.data.Arrival.split('T');
      let Ddate = this.data.Departure.split('T');

      this.reserveForm.patchValue({
        SNo: this.data.SNo,
        Hotel: this.data.Hotel,
        Arrival: Adate[0],
        Departure: Ddate[0],
        Type: this.data.Type,
        Guests: this.data.Guests,
        Price: this.data.Price,
      });
    }
  }
  addList(){
    console.log(Serializer);
    let ser=JSON.stringify(this.reserveForm.value);
    this.service.addList(ser);
    //window.location.reload();
    setTimeout(function(){
      location.reload();
    },2000);
  }
  clear(){
    console.log("ok")
  }

}
