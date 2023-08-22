import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor(private _userService: UserService) {
    this.users = [];
  }

  public ngOnInit(): void {
    this._userService.getUsers()
      .subscribe(response => {
        console.log(response);
        this.users = response;
      })
  }
}
