import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { DelComponent } from '../del/del.component';
import { PopComponent } from '../pop/pop.component';

@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css']
})
export class DetComponent implements OnInit {
  loginForm!: FormGroup;
  // data: any =new MatTableDataSource();
  displayedColumns: string[] = ['SNo', 'Hotel', 'Arrival', 'Departure','Type','Guests','Price','Manage'];
  datasource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  // dataSource = ELEMENT_DATA;
  constructor(private service:SharedService,private dialog:MatDialog,private route:Router,private _liveAnnouncer: LiveAnnouncer) {
   }
  List:any=[];
  ngOnInit(): void {
    this.service.getList().subscribe((data: any)=>{
      //this.List=data;
    // });
      this.datasource=new MatTableDataSource(data)
    this.datasource.sort = this.matsort;
    this.datasource.paginator = this.paginator;
    })
  }
  openAdd(){
    this.dialog.open(PopComponent,{
      height:"80%",
      width:"60%"
    });
  }
  logout(){
    this.route.navigate(['']);
  }
  openEdit(value: number){
    this.dialog.open(PopComponent,{
      height:"80%",
      width:"60%",
      data:value
    });
  }
  openDelete(value:any){
    this.dialog.open(DelComponent,{
      height:"30%",
      width:"50%",
      data:value
    });
    console.log(value)
  }
  filterData($event:any){
    this.datasource.filter=$event.target.value;
  }

 

  

}
