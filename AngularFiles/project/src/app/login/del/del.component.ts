import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

reserveForm: any;

  constructor(private dialog:MatDialog,
    private res:SharedService,@Inject ( MAT_DIALOG_DATA) public data:any) { }
  ngOnInit(): void {

  }
onNo()
{

}
onOk()
  {
    console.log(this.data)
    this.res.deleteList(this.data.SNo).subscribe();
    //window.location.reload();
    setTimeout(function(){
      location.reload();
    },1000);
    console.log("ok");
  }

}
