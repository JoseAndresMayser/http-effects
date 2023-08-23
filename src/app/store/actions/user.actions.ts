import {createAction, props} from "@ngrx/store";
import {User} from "../../interfaces/user.interface";

export const userActions = {
  listUsers: createAction('[Users] List Users'),
  listUsersSuccessfully: createAction(
    '[Users] List Users Successfully',
    props<{ users: User[] }>()
  ),
  listUsersFailed: createAction(
    '[Users] List Users Failed',
    props<{ payload: any }>()
  ),
  showUser: createAction(
    '[Users] Show User',
    props<{ id: number }>()
  ),
  showUserSuccessfully: createAction(
    '[Users] Show User Successfully',
    props<{ user: User }>()
  ),
  showUserFailed: createAction(
    '[Users] Show User Failed',
    props<{ payload: any }>()
  )
}
