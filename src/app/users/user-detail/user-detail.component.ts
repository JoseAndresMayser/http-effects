import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state/app-state.interface";
import {userActions} from "../../store/actions/user.actions";
import {User} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user?: User;
  public userLoading: boolean;
  public error: any;

  constructor(private _route: ActivatedRoute, private _store: Store<AppState>) {
    this.userLoading = false;
  }

  public ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this._store.select('user').subscribe(state => {
      this.user = state.currentUser;
      this.userLoading = state.loading;
      this.error = state.error;
    });
    this._route.params.subscribe(({id}) => {
      this._store.dispatch(userActions.showUser({id}));
    });
  }
}
