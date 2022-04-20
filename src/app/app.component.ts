import { Component, OnInit } from '@angular/core';
import { UsersdataService } from './servicer/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'API Call in angular';
  users: any;
  constructor(private userData: UsersdataService) {}

  ngOnInit(): void {
    this.getApi();
  }

  
  getApi() {
    this.userData.users().subscribe(
      (data: any) => {
        this.users = data.users;
        console.log(this.users);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getUserFormData(data:any) {
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result);
      this.getApi();
    })
  }

  getName(i:number){
    return (this.users[i].name) ? this.users[i].name : (this.users[i].firstname) ? `${this.users[i].firstname} ${this.users[i].lastname}` : "";
  }

  // tarnary Operator 
  // (condition1) ? "  " : (condition2)  : "";
}
