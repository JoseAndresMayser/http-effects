import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {userActions} from "../actions/user.actions";
import {catchError, exhaustMap, map, mergeMap, of, tap} from "rxjs";
import {UserService} from "../../services/user.service";

@Injectable()
export class UserEffects {
  constructor(private _actions$: Actions, private _userService: UserService) {
  }

  listUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userActions.listUsers),
      exhaustMap(() => this._userService.getUsers()
        .pipe(
          map(users => (userActions.listUsersSuccessfully({users}))),
          catchError(error => of(userActions.listUsersFailed({payload: error})))
        )
      )
    )
  );

  showUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(userActions.showUser),
      exhaustMap(({id}) => this._userService.getUser(id)
        .pipe(
          map(user => (userActions.showUserSuccessfully({user}))),
          catchError(error => of(userActions.showUserFailed({payload: error})))
        )
      )
    )
  );
}
