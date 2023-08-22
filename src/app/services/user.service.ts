import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user.interface";
import {map, Observable} from "rxjs";
import {UserResponse} from "../interfaces/user-response.interface";
import {ApiResponse} from "../interfaces/api-response.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _BASE_URL: string = 'https://reqres.in/api';

  constructor(private _httpClient: HttpClient) {
  }

  public getUsers(): Observable<User[]> {
    return this._httpClient.get<ApiResponse<UserResponse[]>>(`${this._BASE_URL}/users`)
      .pipe(
        map(response => response.data.map<User>(
          userResponse => ({
            id: userResponse.id,
            email: userResponse.email,
            firstName: userResponse.first_name,
            lastName: userResponse.last_name,
            avatar: userResponse.avatar
          })
        ))
      );
  }
}
