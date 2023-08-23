import {ActionReducer, createReducer, on} from "@ngrx/store";
import {UserState} from "../state/user-state.interface";
import {userActions} from "../actions/user.actions";

export const initialState: UserState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

export const userReducer: ActionReducer<UserState> = createReducer(
  initialState,
  on(userActions.listUsers, state => ({...state, loading: true})),
  on(userActions.listUsersSuccessfully, (state, {users}) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users]
  })),
  on(userActions.listUsersFailed, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  })),
  on(userActions.showUser, (state, {id}) => ({
    ...state,
    loading: true,
    currentUserId: id
  })),
  on(userActions.showUserSuccessfully, (state, {user}) => ({
    ...state,
    loading: false,
    loaded: true,
    currentUser: {...user}
  })),
  on(userActions.showUserFailed, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);
