import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  transform(value: any, DATE_FMT: string): any {
    throw new Error('Method not implemented.');
  }
readonly APIUrl="https://localhost:44372/api";
httpoptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(private http:HttpClient) { }
 
  addList(val:any){
      return this.http.post('https://localhost:44372/api/res/add',val,this.httpoptions).subscribe();
  }
  
  getList():Observable<any[]>{
    return this.http.get<any>('https://localhost:44372/api/res/GetAllInfo')
    

  }
 
  updateList(val:any){
    return this.http.post('https://localhost:44372/api/res/add',val,this.httpoptions).subscribe();
  }
  deleteList(val:number){
    return this.http.delete('https://localhost:44372/api/res/delete/'+val);
  }
}