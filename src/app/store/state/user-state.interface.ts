import {User} from "../../interfaces/user.interface";

export interface UserState {
  users: User[];
  currentUser?: User;
  currentUserId?: number;
  loaded: boolean;
  loading: boolean;
  error: any;
}
