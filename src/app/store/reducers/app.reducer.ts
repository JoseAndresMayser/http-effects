import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../state/app-state.interface";
import {userReducer} from "./user.reducer";

export const appReducer: ActionReducerMap<AppState> = {
  user: userReducer
};
