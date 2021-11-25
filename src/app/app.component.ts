import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DeptId:any="";
 
  onSubmit(data:any){
console.log(data);
  }
   title = 'AngularDemoApp';
  constructor(private user:UserDataService){
    let data=user.getInfo();
    this.DeptId=data.DeptId;
    this.user.showInfo().subscribe(data=>
      console.log(data))
  }
}
