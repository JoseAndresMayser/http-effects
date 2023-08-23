import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../interfaces/user.interface";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state/app-state.interface";
import {userActions} from "../../store/actions/user.actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: User[];
  public usersLoading: boolean;
  public error: any;

  private _usersSubscription?: Subscription;

  constructor(private _store: Store<AppState>) {
    this.users = [];
    this.usersLoading = false;
  }

  public ngOnInit(): void {
    this._initialize();
  }

  public ngOnDestroy(): void {
    this._finalize();
  }

  private _initialize(): void {
    this._store.dispatch(userActions.listUsers());
    this._usersSubscription = this._store.select('user')
      .subscribe(state => {
        this.users = state.users;
        this.usersLoading = state.loading;
        this.error = state.error;
      });
  }

  private _finalize(): void {
    this._usersSubscription?.unsubscribe();
  }
}
